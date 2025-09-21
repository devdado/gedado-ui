import type { IBaseArtInput } from '../types';

export interface IArtTextInput extends IBaseArtInput {
  pattern?: string;
  minlength: number;
  maxlength: number;
}
