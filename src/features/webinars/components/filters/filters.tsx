import { ENUM_LANGUAGES, ENUM_WEBINAR_CATEGORIES } from '@/constants';
import { Calendar } from 'primereact/calendar';
import { Nullable } from 'primereact/ts-helpers';
import { Dropdown } from 'primereact/dropdown';
import { CATEGORIES_OPTIONS, LANGUAGES_OPTIONS } from '../../constants';
import { GetAllWebinarsByFiltersParams } from '../../api/get-all-webinars-by-filters';
import { DropdownOption } from '@/interfaces';

interface FiltersProps {
  onChange: (filters: GetAllWebinarsByFiltersParams) => void;
  params: GetAllWebinarsByFiltersParams;
}

export const Filters = ({ onChange, params }: FiltersProps) => {
  const { startDate, endDate, language, category } = params;

  const currentSelectedDates: Nullable<(Date | null)[]> =
    !startDate && !endDate
      ? null
      : [
          ...[startDate ? new Date(startDate) : null],
          ...[endDate ? new Date(endDate) : null],
        ];
  const currentSelectedLanguage: DropdownOption<ENUM_LANGUAGES> | null =
    LANGUAGES_OPTIONS.find((option) => option.code === language) || null;
  const currentSelectedCategory: DropdownOption<ENUM_WEBINAR_CATEGORIES> | null =
    CATEGORIES_OPTIONS.find((option) => option.code === category) || null;

  const handleOnChangeDates = (dates: Nullable<(Date | null)[]>) => {
    if (!dates) return;

    const [startDate, endDate] = dates;

    const normalizedStartDate: string | undefined =
      startDate?.toISOString() || undefined;
    const normalizedEndDate: string | undefined =
      endDate?.toISOString() || undefined;

    onChange({
      ...params,
      startDate: normalizedStartDate,
      endDate: normalizedEndDate,
    });
  };

  const handleOnChangeLanguage = (
    language: DropdownOption<ENUM_LANGUAGES> | null,
  ) => {
    if (!language) {
      onChange({
        ...params,
        language: undefined,
      });
      return;
    }

    const normalizedLanguage: ENUM_LANGUAGES = language.code;

    onChange({
      ...params,
      language: normalizedLanguage,
    });
  };

  const handleOnChangeCategory = (
    category: DropdownOption<ENUM_WEBINAR_CATEGORIES> | null,
  ) => {
    if (!category) {
      onChange({
        ...params,
        category: undefined,
      });
      return;
    }

    const normalizedCategory: ENUM_WEBINAR_CATEGORIES = category.code;

    onChange({
      ...params,
      category: normalizedCategory,
    });
  };

  return (
    <div className="max-w-[60rem] flex gap-4 max-md:flex-col max-md:max-w-[100%] max-md:w-full px-4">
      <Calendar
        value={currentSelectedDates}
        onChange={(event) => handleOnChangeDates(event.value)}
        selectionMode="range"
        locale="pt-BR"
        dateFormat="dd/mm/yy"
        readOnlyInput
        placeholder="00/00/0000"
        hideOnRangeSelection
      />
      <Dropdown
        value={currentSelectedLanguage}
        onChange={(event) => handleOnChangeLanguage(event?.value || null)}
        options={LANGUAGES_OPTIONS}
        optionLabel="name"
        placeholder="Idioma"
        className="w-full md:w-14rem"
        showClear
      />
      <Dropdown
        value={currentSelectedCategory}
        onChange={(event) => handleOnChangeCategory(event?.value || null)}
        options={CATEGORIES_OPTIONS}
        optionLabel="name"
        placeholder="Categoria"
        className="w-full md:w-14rem"
        showClear
      />
    </div>
  );
};
