import type { IBaseArtInput } from '../types';

export interface IArtPasswordInput extends IBaseArtInput {
  pattern?: string;
  minlength: number;
  maxlength: number;
}
