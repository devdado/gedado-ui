import { getByTestId } from '@/utilities/test';
import { fixture, html } from '@open-wc/testing';
import { beforeAll, describe, expect, it } from 'vitest';
import './hollow-button';
import { ArtHollowButton } from './hollow-button';

describe('ArtHollowButton Defaults', () => {
  let element: ArtHollowButton;
  let button: HTMLElement | null | undefined;
  let buttonText: HTMLElement | null | undefined;
  let leftIcon: HTMLElement | null | undefined;
  let rightIcon: HTMLElement | null | undefined;

  beforeAll(async () => {
    element = await fixture(html`<art-hollow-button></art-hollow-button>`);
    button = getByTestId(element, 'art-hollow-button');
    buttonText = getByTestId(element, 'art-hollow-button-text');
    leftIcon = getByTestId(element, 'art-hollow-button-left-icon');
    rightIcon = getByTestId(element, 'art-hollow-button-right-icon');
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
    const expectedFontSizeClassClass = 'text-base';

    // Test
    const buttonTextClasses = buttonText?.classList;
    const elementSize = element.size;
    expect(buttonTextClasses).toContain(expectedFontSizeClassClass);
    expect(elementSize).toBe(expectedSize);
  });

  it('should render as "primary" variant', async () => {
    // Setup
    const expectedVariant = 'primary';
    const expectedBorderClass = 'border-accent-primary-light';
    const expectedTextColorClass = 'text-accent-primary-light';
    const expectedHoverBorderClass = 'hover:border-accent-primary-dark';
    const expectedHoverTextColorClass = 'hover:text-accent-primary-dark';

    // Test
    const buttonTextClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonTextClasses).toContain(expectedBorderClass);
    expect(buttonTextClasses).toContain(expectedHoverBorderClass);
    expect(buttonTextClasses).toContain(expectedTextColorClass);
    expect(buttonTextClasses).toContain(expectedHoverTextColorClass);
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

describe('ArtHollowButton Text', () => {
  let element: ArtHollowButton;
  let buttonText: HTMLElement | null | undefined;

  it('should render with "Custom Text" text', async () => {
    // Setup
    element = await fixture(html`<art-hollow-button></art-hollow-button>`);
    buttonText = getByTestId(element, 'art-hollow-button-text');
    const expectedText = 'Custom Text';

    // Interact
    element.text = expectedText;
    await element.updateComplete;

    // Test
    const text = buttonText?.textContent;
    const elementText = element.text;
    expect(text).toBe(expectedText);
    expect(elementText).toBe(expectedText);
  });
});

describe('ArtHollowButton Variants', () => {
  let element: ArtHollowButton;
  let button: HTMLElement | null | undefined;

  beforeAll(async () => {
    element = await fixture(html`<art-hollow-button></art-hollow-button>`);
    button = getByTestId(element, 'art-hollow-button');
  });

  it('should render as "primary"', async () => {
    // Setup
    const expectedVariant = 'primary';
    const expectedBorderClass = 'border-accent-primary-light';
    const expectedTextColorClass = 'text-accent-primary-light';
    const expectedHoverBorderClass = 'hover:border-accent-primary-dark';
    const expectedHoverTextClass = 'hover:text-accent-primary-dark';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBorderClass);
    expect(buttonClasses).toContain(expectedHoverBorderClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverTextClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "secondary"', async () => {
    // Setup
    const expectedVariant = 'secondary';
    const expectedBorderClass = 'border-accent-secondary-light';
    const expectedTextColorClass = 'text-accent-secondary-light';
    const expectedHoverBorderClass = 'hover:border-accent-secondary-dark';
    const expectedHoverTextClass = 'hover:text-accent-secondary-dark';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBorderClass);
    expect(buttonClasses).toContain(expectedHoverBorderClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverTextClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "success"', async () => {
    // Setup
    const expectedVariant = 'success';
    const expectedBorderClass = 'border-status-success-light';
    const expectedTextColorClass = 'text-status-success-light';
    const expectedHoverBorderClass = 'hover:border-status-success-dark';
    const expectedHoverTextClass = 'hover:text-status-success-dark';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBorderClass);
    expect(buttonClasses).toContain(expectedHoverBorderClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverTextClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "warning"', async () => {
    // Setup
    const expectedVariant = 'warning';
    const expectedBorderClass = 'border-status-warning-light';
    const expectedTextColorClass = 'text-status-warning-light';
    const expectedHoverBorderClass = 'hover:border-status-warning-dark';
    const expectedHoverTextClass = 'hover:text-status-warning-dark';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBorderClass);
    expect(buttonClasses).toContain(expectedHoverBorderClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverTextClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "error"', async () => {
    // Setup
    const expectedVariant = 'error';
    const expectedBorderClass = 'border-status-error-light';
    const expectedTextColorClass = 'text-status-error-light';
    const expectedHoverBorderClass = 'hover:border-status-error-dark';
    const expectedHoverTextClass = 'hover:text-status-error-dark';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBorderClass);
    expect(buttonClasses).toContain(expectedHoverBorderClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverTextClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "info"', async () => {
    // Setup
    const expectedVariant = 'info';
    const expectedBorderClass = 'border-status-info-light';
    const expectedTextColorClass = 'text-status-info-light';
    const expectedHoverBorderClass = 'hover:border-status-info-dark';
    const expectedHoverTextClass = 'hover:text-status-info-dark';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBorderClass);
    expect(buttonClasses).toContain(expectedHoverBorderClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverTextClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "neutral"', async () => {
    // Setup
    const expectedVariant = 'neutral';
    const expectedBorderClass = 'border-status-neutral-light';
    const expectedTextColorClass = 'text-status-neutral-light';
    const expectedHoverBorderClass = 'hover:border-status-neutral-dark';
    const expectedHoverTextClass = 'hover:text-status-neutral-dark';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBorderClass);
    expect(buttonClasses).toContain(expectedHoverBorderClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(buttonClasses).toContain(expectedHoverTextClass);
    expect(elementVariant).toBe(expectedVariant);
  });
});

describe('ArtHollowButton Sizes', () => {
  let element: ArtHollowButton;
  let buttonText: HTMLElement | null | undefined;

  beforeAll(async () => {
    element = await fixture(html`<art-hollow-button></art-hollow-button>`);
    buttonText = getByTestId(element, 'art-hollow-button-text');
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

describe('ArtHollowButton States', () => {
  let element: ArtHollowButton;
  let button: HTMLElement | null | undefined;

  beforeAll(async () => {
    element = await fixture(html`<art-hollow-button></art-hollow-button>`);
    button = getByTestId(element, 'art-hollow-button');
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

describe('ArtHollowButton Icons', () => {
  let element: ArtHollowButton;
  let leftIcon: HTMLElement | null | undefined;
  let rightIcon: HTMLElement | null | undefined;

  beforeAll(async () => {
    element = await fixture(html`<art-hollow-button></art-hollow-button>`);
  });

  it('should render with left icon', async () => {
    // Setup
    const expectedIcon = 'home';

    // Interact
    element.leftIcon = expectedIcon;
    await element.updateComplete;

    // Test
    leftIcon = getByTestId(element, 'art-hollow-button-left-icon');
    const elementLeftIcon = element.leftIcon;
    const leftIconContent = leftIcon?.textContent;
    expect(leftIcon).toBeDefined();
    expect(elementLeftIcon).toBe(expectedIcon);
    expect(leftIconContent).toBe(expectedIcon);
  });

  it('should render with right icon', async () => {
    // Setup
    const expectedIcon = 'home';

    // Interact
    element.rightIcon = expectedIcon;
    await element.updateComplete;

    // Test
    rightIcon = getByTestId(element, 'art-hollow-button-right-icon');
    const elementRightIcon = element.rightIcon;
    const rightIconContent = rightIcon?.textContent;
    expect(rightIcon).toBeDefined();
    expect(elementRightIcon).toBe(expectedIcon);
    expect(rightIconContent).toBe(expectedIcon);
  });
});
