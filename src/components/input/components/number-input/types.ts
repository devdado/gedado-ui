import type { IBaseArtInput } from '../types';

export interface IArtNumberInput extends IBaseArtInput {
  min?: number;
  max?: number;
  step: number;
}
