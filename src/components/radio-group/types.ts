import type { ArtVariant } from '@/types/core';

export interface IArtRadioButton {
  id: string;
  value: string;
  label: string;
}

export interface IArtRadioGroup {
  name: string;
  legend: string;
  variant: ArtVariant;
  disabled: boolean;
  value?: string;
  layout: RadioGroupLayout;
  radioButtons: IArtRadioButton[];
}

export const radioGroupLayouts = ['vertical', 'horizontal'];
export type RadioGroupLayout = (typeof radioGroupLayouts)[number];
