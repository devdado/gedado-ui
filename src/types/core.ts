export const artSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];
export type ArtSize = (typeof artSizes)[number];

export const artBreakpoints = ['sm', 'md', 'lg', 'xl', '2xl'];
export type ArtBreakpoint = (typeof artBreakpoints)[number];

export const artBrands = ['primary', 'secondary'];
export type ArtBrand = (typeof artBrands)[number];

export const artStatus = ['error', 'warning', 'success', 'info', 'neutral'];
export type ArtStatus = (typeof artStatus)[number];

export const artVariants = [...artBrands, ...status];
export type ArtVariant = (typeof artVariants)[number];
