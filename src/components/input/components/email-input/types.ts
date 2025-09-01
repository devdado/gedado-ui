import type { IBaseArtInput } from '../types';

export interface IArtEmailInput extends IBaseArtInput {
  minlength: number;
  maxlength: number;
  multiple: boolean;
}
