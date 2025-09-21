import type { IBaseArtInput } from '../types';

export interface IArtSearchInput extends IBaseArtInput {
  pattern?: string;
  minlength: number;
  maxlength: number;
}
