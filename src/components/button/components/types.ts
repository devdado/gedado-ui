import type { ArtSize, ArtVariant } from '@/types/core';

export interface IBaseArtButton {
  variant: ArtVariant;
  size: ArtSize;
  disabled: boolean;
}
