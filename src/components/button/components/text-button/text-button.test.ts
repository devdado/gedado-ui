import { getByTestId } from '@/utilities/test';
import { fixture, html } from '@open-wc/testing';
import { beforeAll, describe, expect, it } from 'vitest';
import './text-button';
import { ArtTextButton } from './text-button';

describe('ArtTextButton Defaults', () => {
  let element: ArtTextButton;
  let button: HTMLElement | null | undefined;
  let buttonText: HTMLElement | null | undefined;
  let leftIcon: HTMLElement | null | undefined;
  let rightIcon: HTMLElement | null | undefined;

  beforeAll(async () => {
    element = await fixture(html`<art-text-button></art-text-button>`);
    button = getByTestId(element, 'art-text-button');
    buttonText = getByTestId(element, 'art-text-button-text');
    leftIcon = getByTestId(element, 'art-text-button-left-icon');
    rightIcon = getByTestId(element, 'art-text-button-right-icon');
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

  it('should render without left icon', async () => {
    // Test
    expect(leftIcon).toBeNull();
  });

  it('should render without right icon', async () => {
    // Test
    expect(rightIcon).toBeNull();
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
    const expectedBgClass = 'bg-accent-primary-light';
    const expectedTextColorClass = 'text-accent-primary-darkest';
    const expectedHoverBgClass = 'hover:bg-accent-primary-lightest';

    // Test
    const buttonTextClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonTextClasses).toContain(expectedBgClass);
    expect(buttonTextClasses).toContain(expectedHoverBgClass);
    expect(buttonTextClasses).toContain(expectedTextColorClass);
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

describe('ArtTextButton Text', () => {
  let element: ArtTextButton;
  let buttonText: HTMLElement | null | undefined;

  it('should render with "Custom Text" text', async () => {
    // Setup
    element = await fixture(html`<art-text-button></art-text-button>`);
    buttonText = getByTestId(element, 'art-text-button-text');
    const expectedText = 'Custom Text';

    // Interact
    element.text = expectedText;
    await element.updateComplete;

    // Test
    const text = buttonText?.textContent;
    expect(text).toBe(expectedText);
  });
});

describe('ArtTextButton Variants', () => {
  let element: ArtTextButton;
  let button: HTMLElement | null | undefined;

  beforeAll(async () => {
    element = await fixture(html`<art-text-button></art-text-button>`);
    button = getByTestId(element, 'art-text-button');
  });

  it('should render as "primary"', async () => {
    // Setup
    const expectedVariant = 'primary';
    const expectedBgClass = 'bg-accent-primary-light';
    const expectedTextColorClass = 'text-accent-primary-darkest';
    const expectedHoverBgClass = 'hover:bg-accent-primary-lightest';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBgClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverBgClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "secondary"', async () => {
    // Setup
    const expectedVariant = 'secondary';
    const expectedBgClass = 'bg-accent-secondary-light';
    const expectedTextColorClass = 'text-accent-secondary-darkest';
    const expectedHoverBgClass = 'hover:bg-accent-secondary-lightest';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBgClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverBgClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "success"', async () => {
    // Setup
    const expectedVariant = 'success';
    const expectedBgClass = 'bg-status-success-light';
    const expectedTextColorClass = 'text-status-success-darkest';
    const expectedHoverBgClass = 'hover:bg-status-success-lightest';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBgClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverBgClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "warning"', async () => {
    // Setup
    const expectedVariant = 'warning';
    const expectedBgClass = 'bg-status-warning-light';
    const expectedTextColorClass = 'text-status-warning-darkest';
    const expectedHoverBgClass = 'hover:bg-status-warning-lightest';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBgClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverBgClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "error"', async () => {
    // Setup
    const expectedVariant = 'error';
    const expectedBgClass = 'bg-status-error-light';
    const expectedTextColorClass = 'text-status-error-darkest';
    const expectedHoverBgClass = 'hover:bg-status-error-lightest';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBgClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverBgClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "info"', async () => {
    // Setup
    const expectedVariant = 'info';
    const expectedBgClass = 'bg-status-info-light';
    const expectedTextColorClass = 'text-status-info-darkest';
    const expectedHoverBgClass = 'hover:bg-status-info-lightest';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBgClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverBgClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "neutral"', async () => {
    // Setup
    const expectedVariant = 'neutral';
    const expectedBgClass = 'bg-status-neutral-light';
    const expectedTextColorClass = 'text-status-neutral-darkest';
    const expectedHoverBgClass = 'hover:bg-status-neutral-lightest';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBgClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverBgClass);
    expect(elementVariant).toBe(expectedVariant);
  });
});

describe('ArtTextButton Sizes', () => {
  let element: ArtTextButton;
  let buttonText: HTMLElement | null | undefined;

  beforeAll(async () => {
    element = await fixture(html`<art-text-button></art-text-button>`);
    buttonText = getByTestId(element, 'art-text-button-text');
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

describe('ArtTextButton States', () => {
  let element: ArtTextButton;
  let button: HTMLElement | null | undefined;

  beforeAll(async () => {
    element = await fixture(html`<art-text-button></art-text-button>`);
    button = getByTestId(element, 'art-text-button');
  });

  it('should render enabled', async () => {
    // Interact
    element.disabled = false;
    await element.updateComplete;

    // Test
    const buttonDisabledAttr = button?.hasAttribute('disabled');
    const elementDisabledAttr = element.disabled;
    expect(buttonDisabledAttr).toBeFalsy();
    expect(elementDisabledAttr).toBeFalsy();
  });

  it('should render disabled', async () => {
    // Interact
    element.disabled = true;
    await element.updateComplete;

    // Test
    const buttonDisabledAttr = button?.hasAttribute('disabled');
    const elementDisabledAttr = element.disabled;
    expect(buttonDisabledAttr).toBeTruthy();
    expect(elementDisabledAttr).toBeTruthy();
  });
});

describe('ArtTextButton Icons', () => {
  let element: ArtTextButton;
  let leftIcon: HTMLElement | null | undefined;
  let rightIcon: HTMLElement | null | undefined;
  const expectedIcon = 'settings';

  beforeAll(async () => {
    element = await fixture(html`<art-text-button></art-text-button>`);
  });

  it('should render with left icon', async () => {
    // Interact
    element.leftIcon = expectedIcon;
    await element.updateComplete;

    // Test
    leftIcon = getByTestId(element, 'art-text-button-left-icon');
    const elementLeftIcon = element.leftIcon;
    const leftIconContent = leftIcon?.textContent;
    expect(leftIcon).toBeDefined();
    expect(elementLeftIcon).toBe(expectedIcon);
    expect(leftIconContent).toBe(expectedIcon);
  });

  it('should render with right icon', async () => {
    // Interact
    element.rightIcon = expectedIcon;
    await element.updateComplete;

    // Test
    rightIcon = getByTestId(element, 'art-text-button-right-icon');
    const elementRightIcon = element.rightIcon;
    const rightIconContent = rightIcon?.textContent;
    expect(rightIcon).toBeDefined();
    expect(elementRightIcon).toBe(expectedIcon);
    expect(rightIconContent).toBe(expectedIcon);
  });
});
