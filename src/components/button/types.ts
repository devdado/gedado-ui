import type { Variant } from '@/shared/models';

export type ButtonSize = 'tiny' | 'small' | 'base' | 'large';

export interface IBaseButton {
  variant: Variant;
  size: ButtonSize;
  text: string;
  leftIcon?: string;
  rightIcon?: string;
  disabled: boolean;
}

export interface ITextButton extends IBaseButton {}

export interface IHollowButton extends IBaseButton {}

export interface IIconButton extends Omit<IBaseButton, 'text' | 'leftIcon' | 'rightIcon'> {
  icon: string;
}

export interface IFlatButton extends Omit<IBaseButton, 'leftIcon' | 'rightIcon'> {}
