import type { Variant } from '@/types/core';

export interface ICoeRadioButton {
  id: string;
  value: string;
  label: string;
  variant?: Variant;
}

export interface ICoeRadioGroup {
  name: string;
  legend: string;
  disabled: boolean;
  value?: string;
  layout: RadioGroupLayout;
  radioButtons: ICoeRadioButton[];
}

export type RadioGroupLayout = 'vertical' | 'horizontal';
