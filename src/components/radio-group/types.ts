import type { Variant } from '@/types/core';

export interface IArtRadioButton {
  id: string;
  value: string;
  label: string;
  variant?: Variant;
}

export interface IArtRadioGroup {
  name: string;
  legend: string;
  disabled: boolean;
  value?: string;
  layout: RadioGroupLayout;
  radioButtons: IArtRadioButton[];
}

export const radioGroupLayouts = ['vertical', 'horizontal'];
export type RadioGroupLayout = (typeof radioGroupLayouts)[number];
