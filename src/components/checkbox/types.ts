import type { Variant } from '@/types/core';

export interface IArtCheckbox {
  id: string;
  name: string;
  label?: string;
  variant: Variant;
  checked: boolean;
  required: boolean;
  disabled: boolean;
}
