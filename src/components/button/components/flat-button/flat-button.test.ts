import { getByTestId } from '@/utilities/test';
import { fixture, html } from '@open-wc/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import './flat-button';
import { ArtFlatButton } from './flat-button';

describe('ArtFlatButton Defaults', () => {
  let element: ArtFlatButton;
  let button: HTMLElement | null | undefined;
  let buttonText: HTMLElement | null | undefined;

  beforeEach(async () => {
    element = await fixture(html`<art-flat-button></art-flat-button>`);
    button = getByTestId(element, 'art-flat-button');
    buttonText = getByTestId(element, 'art-flat-button-text');
  });

  it('should render with "Click" text', async () => {
    // Setup
    const expectedText = 'Click';

    // Test
    const text = buttonText?.textContent;
    const elementText = element.text;
    expect(text).toBe(expectedText);
    expect(elementText).toBe(expectedText);
  });

  it('should render with "md" size', async () => {
    // Setup
    const expectedSize = 'md';
    const expectedFontSizeClass = 'text-base';

    // Test
    const buttonTextClasses = buttonText?.classList;
    const elementSize = element.size;
    expect(buttonTextClasses).toContain(expectedFontSizeClass);
    expect(elementSize).toBe(expectedSize);
  });

  it('should render as "primary" variant', async () => {
    // Setup
    const expectedVariant = 'primary';
    const expectedTextColorClass = 'text-accent-primary';
    const expectedHoverTextColorClass = 'hover:text-accent-primary-dark';

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverTextColorClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render enabled', async () => {
    // Test
    const disabled = button?.hasAttribute('disabled');
    const elementDisabled = element.disabled;
    expect(disabled).toBeFalsy();
    expect(elementDisabled).toBeFalsy();
  });
});

describe('ArtFlatButton Text', () => {
  let element: ArtFlatButton;
  let buttonText: HTMLElement | null | undefined;

  it('should render with "Custom Text" text', async () => {
    // Setup
    element = await fixture(html`<art-flat-button></art-flat-button>`);
    buttonText = getByTestId(element, 'art-flat-button-text');
    const expectedText = 'Custom Text';

    // Interact
    element.text = expectedText;
    await element.updateComplete;

    // Text
    const text = buttonText?.textContent;
    const elementText = element.text;
    expect(text).toBe(expectedText);
    expect(elementText).toBe(expectedText);
  });
});

describe('ArtFlatButton Variants', () => {
  let element: ArtFlatButton;
  let button: HTMLElement | null | undefined;

  beforeEach(async () => {
    element = await fixture(html`<art-flat-button></art-flat-button>`);
    button = getByTestId(element, 'art-flat-button');
  });

  it('should render as "primary"', async () => {
    // Setup
    const expectedVariant = 'primary';
    const expectedTextColorClass = 'text-accent-primary';
    const expectedHoverTextColorClass = 'hover:text-accent-primary-dark';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Text
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverTextColorClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "secondary"', async () => {
    // Setup
    const expectedVariant = 'secondary';
    const expectedTextColorClass = 'text-accent-secondary';
    const expectedHoverTextColorClass = 'hover:text-accent-secondary-dark';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Text
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverTextColorClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "success"', async () => {
    // Setup
    const expectedVariant = 'success';
    const expectedTextColorClass = 'text-status-success';
    const expectedHoverTextColorClass = 'hover:text-status-success-dark';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Text
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverTextColorClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "warning"', async () => {
    // Setup
    const expectedVariant = 'warning';
    const expectedTextColorClass = 'text-status-warning';
    const expectedHoverTextColorClass = 'hover:text-status-warning-dark';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Text
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverTextColorClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "error"', async () => {
    // Setup
    const expectedVariant = 'error';
    const expectedTextColorClass = 'text-status-error';
    const expectedHoverTextColorClass = 'hover:text-status-error-dark';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Text
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverTextColorClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "info"', async () => {
    // Setup
    const expectedVariant = 'info';
    const expectedTextColorClass = 'text-status-info';
    const expectedHoverTextColorClass = 'hover:text-status-info-dark';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Text
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverTextColorClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "neutral"', async () => {
    // Setup
    const expectedVariant = 'neutral';
    const expectedTextColorClass = 'text-status-neutral';
    const expectedHoverTextColorClass = 'hover:text-status-neutral-dark';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Text
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverTextColorClass);
    expect(elementVariant).toBe(expectedVariant);
  });
});

describe('ArtFlatButton Sizes', () => {
  let element: ArtFlatButton;
  let buttonText: HTMLElement | null | undefined;

  beforeEach(async () => {
    element = await fixture(html`<art-flat-button></art-flat-button>`);
    buttonText = getByTestId(element, 'art-flat-button-text');
  });

  it('should render with "xs" size', async () => {
    // Setup
    const expectedSize = 'xs';
    const expectedFontSizeClass = 'text-xs';

    // Interact
    element.size = expectedSize;
    await element.updateComplete;

    // Test
    const buttonTextClasses = buttonText?.classList;
    const elementSize = element.size;
    expect(buttonTextClasses).toContain(expectedFontSizeClass);
    expect(elementSize).toBe(expectedSize);
  });

  it('should render with "sm" size', async () => {
    // Setup
    const expectedSize = 'sm';
    const expectedFontSizeClass = 'text-sm';

    // Interact
    element.size = expectedSize;
    await element.updateComplete;

    // Test
    const buttonTextClasses = buttonText?.classList;
    const elementSize = element.size;
    expect(buttonTextClasses).toContain(expectedFontSizeClass);
    expect(elementSize).toBe(expectedSize);
  });

  it('should render with "md" size', async () => {
    // Setup
    const expectedSize = 'md';
    const expectedFontSizeClass = 'text-base';

    // Interact
    element.size = expectedSize;
    await element.updateComplete;

    // Test
    const buttonTextClasses = buttonText?.classList;
    const elementSize = element.size;
    expect(buttonTextClasses).toContain(expectedFontSizeClass);
    expect(elementSize).toBe(expectedSize);
  });

  it('should render with "lg" size', async () => {
    // Setup
    const expectedSize = 'lg';
    const expectedFontSizeClass = 'text-lg';

    // Interact
    element.size = expectedSize;
    await element.updateComplete;

    // Test
    const buttonTextClasses = buttonText?.classList;
    const elementSize = element.size;
    expect(buttonTextClasses).toContain(expectedFontSizeClass);
    expect(elementSize).toBe(expectedSize);
  });

  it('should render with "xl" size', async () => {
    // Setup
    const expectedSize = 'xl';
    const expectedFontSizeClass = 'text-xl';

    // Interact
    element.size = expectedSize;
    await element.updateComplete;

    // Test
    const buttonTextClasses = buttonText?.classList;
    const elementSize = element.size;
    expect(buttonTextClasses).toContain(expectedFontSizeClass);
    expect(elementSize).toBe(expectedSize);
  });

  it('should render with "2xl" size', async () => {
    // Setup
    const expectedSize = '2xl';
    const expectedFontSizeClass = 'text-2xl';

    // Interact
    element.size = expectedSize;
    await element.updateComplete;

    // Test
    const buttonTextClasses = buttonText?.classList;
    const elementSize = element.size;
    expect(buttonTextClasses).toContain(expectedFontSizeClass);
    expect(elementSize).toBe(expectedSize);
  });

  it('should render with "3xl" size', async () => {
    // Setup
    const expectedSize = '3xl';
    const expectedFontSizeClass = 'text-3xl';

    // Interact
    element.size = expectedSize;
    await element.updateComplete;

    // Test
    const buttonTextClasses = buttonText?.classList;
    const elementSize = element.size;
    expect(buttonTextClasses).toContain(expectedFontSizeClass);
    expect(elementSize).toBe(expectedSize);
  });
});

describe('ArtFlatButton States', () => {
  let element: ArtFlatButton;
  let button: HTMLElement | null | undefined;

  beforeEach(async () => {
    element = await fixture(html`<art-flat-button></art-flat-button>`);
    button = getByTestId(element, 'art-flat-button');
  });

  it('should render enabled', async () => {
    // Interaction
    element.disabled = false;
    await element.updateComplete;

    // test
    const disabled = button?.hasAttribute('disabled');
    const elementDisabledAttr = element.disabled;
    expect(disabled).toBeFalsy();
    expect(elementDisabledAttr).toBeFalsy();
  });

  it('should render disabled', async () => {
    // Interaction
    element.disabled = true;
    await element.updateComplete;

    // test
    const disabled = button?.hasAttribute('disabled');
    const elementDisabledAttr = element.disabled;
    expect(disabled).toBeTruthy();
    expect(elementDisabledAttr).toBeTruthy();
  });
});
