import { ENUM_LANGUAGES, ENUM_WEBINAR_CATEGORIES } from '@/constants';
import { Calendar } from 'primereact/calendar';
import { Nullable } from 'primereact/ts-helpers';
import { useCallback, useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { CATEGORIES_OPTIONS, LANGUAGES_OPTIONS } from '../../constants';
import { GetAllWebinarsByFiltersParams } from '../../api/get-all-webinars-by-filters';
import { DropdownOption } from '@/interfaces';

interface FiltersProps {
  onChange: (filters: GetAllWebinarsByFiltersParams) => void;
}

export const Filters = ({ onChange }: FiltersProps) => {
  const [currentSelectedDates, setCurrentSelectedDates] =
    useState<Nullable<(Date | null)[]>>(null);
  const [currentSelectedLanguage, setCurrentSelectedLanguage] =
    useState<DropdownOption<ENUM_LANGUAGES> | null>(null);
  const [currentSelectedCategory, setCurrentSelectedCategory] =
    useState<DropdownOption<ENUM_WEBINAR_CATEGORIES> | null>(null);

  const handleOnChangeDetection = useCallback(() => {
    const [startDate, endDate] = currentSelectedDates || [undefined, undefined];

    const normalizedStartDate =
      startDate === null ? undefined : startDate?.toISOString();
    const normalizedEndDate =
      endDate === null ? undefined : endDate?.toISOString();
    const normalizedCategory: ENUM_WEBINAR_CATEGORIES | undefined =
      currentSelectedCategory === null
        ? undefined
        : (currentSelectedCategory.code as ENUM_WEBINAR_CATEGORIES);
    const normalizedLanguage: ENUM_LANGUAGES | undefined =
      currentSelectedLanguage === null
        ? undefined
        : (currentSelectedLanguage.code as ENUM_LANGUAGES);

    onChange({
      startDate: normalizedStartDate,
      endDate: normalizedEndDate,
      category: normalizedCategory,
      language: normalizedLanguage,
    });
  }, [
    currentSelectedDates,
    currentSelectedCategory,
    currentSelectedLanguage,
    onChange,
  ]);

  useEffect(() => {
    handleOnChangeDetection();
  }, [handleOnChangeDetection]);

  return (
    <div className="max-w-[60rem] flex gap-4 max-md:flex-col max-md:max-w-[100%] max-md:w-full px-4">
      <Calendar
        value={currentSelectedDates}
        onChange={(event) => setCurrentSelectedDates(event.value)}
        selectionMode="range"
        locale="pt-BR"
        dateFormat="dd/mm/yy"
        readOnlyInput
        placeholder="00/00/0000"
        hideOnRangeSelection
      />
      <Dropdown
        value={currentSelectedLanguage}
        onChange={(event) => setCurrentSelectedLanguage(event?.value || null)}
        options={LANGUAGES_OPTIONS}
        optionLabel="name"
        placeholder="Idioma"
        className="w-full md:w-14rem"
        showClear
      />
      <Dropdown
        value={currentSelectedCategory}
        onChange={(event) => setCurrentSelectedCategory(event?.value || null)}
        options={CATEGORIES_OPTIONS}
        optionLabel="name"
        placeholder="Categoria"
        className="w-full md:w-14rem"
        showClear
      />
    </div>
  );
};
