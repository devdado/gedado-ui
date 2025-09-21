import { LitElement } from 'lit';

/**
 * A helper function to query an element by its data-testid inside a Lit component's shadow DOM.
 * @param component The LitElement instance.
 * @param testId The value of the data-testid attribute.
 * @returns The found element or null.
 */
export function getByTestId<T extends HTMLElement>(component: LitElement, testId: string): T | null {
  const selector = `[data-testid="${testId}"]`;
  // We use `as T` here to cast the return type, but be careful with type assertions.
  return component.shadowRoot?.querySelector(selector) as T | null;
}
