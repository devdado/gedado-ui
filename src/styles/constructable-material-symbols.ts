import MaterialSymbolsRounded from 'material-symbols/rounded.css?inline';

let sharedMaterialSymbolsRoundedSheet: CSSStyleSheet | undefined;

export const getSharedMaterialSymbolsRoundedStyles = (): CSSStyleSheet | undefined => {
  if (
    typeof window !== 'undefined' &&
    typeof CSSStyleSheet !== 'undefined' &&
    !sharedMaterialSymbolsRoundedSheet
  ) {
    sharedMaterialSymbolsRoundedSheet = new CSSStyleSheet();
    sharedMaterialSymbolsRoundedSheet.replaceSync(MaterialSymbolsRounded);
  }
  return sharedMaterialSymbolsRoundedSheet;
};
