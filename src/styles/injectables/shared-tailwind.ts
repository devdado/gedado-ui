import twStyles from '../tailwind.css?inline';

let sharedTailwind: CSSStyleSheet | undefined;

export const getSharedTailwindStyles = (): CSSStyleSheet | undefined => {
  // Check if we are in a browser environment AND if CSSStyleSheet API is available.
  // Also, ensure the stylesheet hasn't been created yet (lazy initialization).
  if (typeof window !== 'undefined' && typeof CSSStyleSheet !== 'undefined' && !sharedTailwind) {
    sharedTailwind = new CSSStyleSheet();
    sharedTailwind.replaceSync(twStyles);
  }

  return sharedTailwind;
};
