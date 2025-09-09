export interface IArtSelectOption {
  value: string;
  name: string;
}

export interface IArtSelect {
  id: string;
  name: string;
  label?: string;
  size: number;
  value: string;
  required: boolean;
  disabled: boolean;
  multiple: boolean;
  options: IArtSelectOption[];
}
