export interface IArtTextarea {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  minlength: number;
  maxlength: number;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  rows: number;
  cols: number;
  wrap: 'hard' | 'soft';
  autogrow: boolean;
}
