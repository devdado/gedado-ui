import type { Variant } from '@/types/core';

export const buttonSizes = ['tiny', 'small', 'base', 'large'];
export type ButtonSize = (typeof buttonSizes)[number];

export interface IBaseArtButton {
  variant: Variant;
  size: ButtonSize;
  disabled: boolean;
}

export interface IFullArtButton extends IBaseArtButton {
  leftIcon?: string;
  rightIcon?: string;
  text: string;
}
