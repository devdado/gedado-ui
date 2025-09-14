import type { ArtVariant } from '@/types/core';

export interface IArtCheckbox {
  id: string;
  name: string;
  label?: string;
  variant: ArtVariant;
  checked: boolean;
  required: boolean;
  disabled: boolean;
}
