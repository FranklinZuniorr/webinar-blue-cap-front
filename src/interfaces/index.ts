export interface ResponseMessage {
  message: string;
}

export interface DropdownOption<TCode = string> {
  name: string;
  code: TCode;
}
