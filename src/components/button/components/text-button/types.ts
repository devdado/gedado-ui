import type { IBaseArtButton } from '../types';

export interface IArtTextButton extends IBaseArtButton {
  leftIcon?: string;
  rightIcon?: string;
  text: string;
}
