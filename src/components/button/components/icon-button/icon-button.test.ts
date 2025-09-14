import { getByTestId } from '@/utilities/test';
import { fixture, html } from '@open-wc/testing';
import { beforeAll, describe, expect, it } from 'vitest';
import './icon-button';
import { ArtIconButton } from './icon-button';

describe('ArtIconButton Defaults', () => {
  let element: ArtIconButton;
  let button: HTMLElement | null | undefined;
  let buttonIcon: HTMLElement | null | undefined;

  beforeAll(async () => {
    element = await fixture(html`<art-icon-button></art-icon-button>`);
    button = getByTestId(element, 'art-icon-button');
    buttonIcon = getByTestId(element, 'art-icon-button-icon');
  });

  it('should render with "home" icon', async () => {
    // Setup
    const expectedIcon = 'home';

    // Test
    const icon = buttonIcon?.textContent;
    const elementIcon = element.icon;
    expect(icon).toBe(expectedIcon);
    expect(elementIcon).toBe(expectedIcon);
  });

  it('should render with "md" size', async () => {
    // Setup
    const expectedSize = 'md';
    const expectedIconSizeClass = '!text-[20px]';

    // Test
    const buttonIconClasses = buttonIcon?.classList;
    const elementSize = element.size;
    expect(buttonIconClasses).toContain(expectedIconSizeClass);
    expect(elementSize).toBe(expectedSize);
  });

  it('should render as "primary" variant', async () => {
    // Setup
    const expectedVariant = 'primary';
    const expectedBgClass = 'bg-accent-primary-light';
    const expectedHoverBgClass = 'hover:bg-accent-primary-lightest';
    const expectedTextColorClass = 'text-accent-primary-darkest';

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(elementVariant).toBe(expectedVariant);
    expect(buttonClasses).toContain(expectedBgClass);
    expect(buttonClasses).toContain(expectedHoverBgClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
  });

  it('should render enabled', async () => {
    // Test
    const disabled = button?.hasAttribute('disabled');
    const elementDisabled = element.disabled;
    expect(disabled).toBeFalsy();
    expect(elementDisabled).toBeFalsy();
  });
});

describe('ArtIconButton Icon', () => {
  let element: ArtIconButton;
  let buttonIcon: HTMLElement | null | undefined;

  it('should render with "settings" icon', async () => {
    // Setup
    element = await fixture(html`<art-icon-button></art-icon-button>`);
    buttonIcon = getByTestId(element, 'art-icon-button-icon');
    const expectedIcon = 'settings';

    // Interact
    element.icon = expectedIcon;
    await element.updateComplete;

    // Test
    const icon = buttonIcon?.textContent;
    const elementIcon = element.icon;
    expect(icon).toBe(expectedIcon);
    expect(elementIcon).toBe(expectedIcon);
  });
});

describe('ArtIconButton Variants', () => {
  let element: ArtIconButton;
  let button: HTMLElement | null | undefined;

  beforeAll(async () => {
    element = await fixture(html`<art-icon-button></art-icon-button>`);
    button = getByTestId(element, 'art-icon-button');
  });

  it('should render as "primary"', async () => {
    // Setup
    const expectedVariant = 'primary';
    const expectedBgClass = 'bg-accent-primary-light';
    const expectedHoverBgClass = 'hover:bg-accent-primary-lightest';
    const expectedTextColorClass = 'text-accent-primary-darkest';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBgClass);
    expect(buttonClasses).toContain(expectedHoverBgClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "secondary"', async () => {
    // Setup
    const expectedVariant = 'secondary';
    const expectedBgClass = 'bg-accent-secondary-light';
    const expectedHoverBgClass = 'hover:bg-accent-secondary-lightest';
    const expectedTextColorClass = 'text-accent-secondary-darkest';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBgClass);
    expect(buttonClasses).toContain(expectedHoverBgClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "success"', async () => {
    // Setup
    const expectedVariant = 'success';
    const expectedBgClass = 'bg-status-success-light';
    const expectedHoverBgClass = 'hover:bg-status-success-lightest';
    const expectedTextColorClass = 'text-status-success-darkest';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBgClass);
    expect(buttonClasses).toContain(expectedHoverBgClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "warning"', async () => {
    // Setup
    const expectedVariant = 'warning';
    const expectedBgClass = 'bg-status-warning-light';
    const expectedHoverBgClass = 'hover:bg-status-warning-lightest';
    const expectedTextColorClass = 'text-status-warning-darkest';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBgClass);
    expect(buttonClasses).toContain(expectedHoverBgClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "error"', async () => {
    // Setup
    const expectedVariant = 'error';
    const expectedBgClass = 'bg-status-error-light';
    const expectedHoverBgClass = 'hover:bg-status-error-lightest';
    const expectedTextColorClass = 'text-status-error-darkest';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBgClass);
    expect(buttonClasses).toContain(expectedHoverBgClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "info"', async () => {
    // Setup
    const expectedVariant = 'info';
    const expectedBgClass = 'bg-status-info-light';
    const expectedHoverBgClass = 'hover:bg-status-info-lightest';
    const expectedTextColorClass = 'text-status-info-darkest';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBgClass);
    expect(buttonClasses).toContain(expectedHoverBgClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(elementVariant).toBe(expectedVariant);
  });

  it('should render as "neutral"', async () => {
    // Setup
    const expectedVariant = 'neutral';
    const expectedBgClass = 'bg-status-neutral-light';
    const expectedHoverBgClass = 'hover:bg-status-neutral-lightest';
    const expectedTextColorClass = 'text-status-neutral-darkest';

    // Interact
    element.variant = expectedVariant;
    await element.updateComplete;

    // Test
    const buttonClasses = button?.classList;
    const elementVariant = element.variant;
    expect(buttonClasses).toContain(expectedBgClass);
    expect(buttonClasses).toContain(expectedHoverBgClass);
    expect(buttonClasses).toContain(expectedTextColorClass);
    expect(elementVariant).toBe(expectedVariant);
  });
});

describe('ArtIconButton Sizes', () => {
  let element: ArtIconButton;
  let buttonIcon: HTMLElement | null | undefined;

  beforeAll(async () => {
    element = await fixture(html`<art-icon-button></art-icon-button>`);
    buttonIcon = getByTestId(element, 'art-icon-button-icon');
  });

  it('should render with "xs" size', async () => {
    // Setup
    const expectedSize = 'xs';
    const expectedIconSizeClass = '!text-[16px]';

    // Interact
    element.size = expectedSize;
    await element.updateComplete;

    // Test
    const buttonIconClasses = buttonIcon?.classList;
    const elementSize = element.size;
    expect(buttonIconClasses).toContain(expectedIconSizeClass);
    expect(elementSize).toBe(expectedSize);
  });

  it('should render with "sm" size', async () => {
    // Setup
    const expectedSize = 'sm';
    const expectedIconSizeClass = '!text-[18px]';

    // Interact
    element.size = expectedSize;
    await element.updateComplete;

    // Test
    const buttonIconClasses = buttonIcon?.classList;
    const elementSize = element.size;
    expect(buttonIconClasses).toContain(expectedIconSizeClass);
    expect(elementSize).toBe(expectedSize);
  });

  it('should render with "md" size', async () => {
    // Setup
    const expectedSize = 'md';
    const expectedIconSizeClass = '!text-[20px]';

    // Interact
    element.size = expectedSize;
    await element.updateComplete;

    // Test
    const buttonIconClasses = buttonIcon?.classList;
    const elementSize = element.size;
    expect(buttonIconClasses).toContain(expectedIconSizeClass);
    expect(elementSize).toBe(expectedSize);
  });

  it('should render with "lg" size', async () => {
    // Setup
    const expectedSize = 'lg';
    const expectedIconSizeClass = '!text-[22px]';

    // Interact
    element.size = expectedSize;
    await element.updateComplete;

    // Test
    const buttonIconClasses = buttonIcon?.classList;
    const elementSize = element.size;
    expect(buttonIconClasses).toContain(expectedIconSizeClass);
    expect(elementSize).toBe(expectedSize);
  });

  it('should render with "xl" size', async () => {
    // Setup
    const expectedSize = 'xl';
    const expectedIconSizeClass = '!text-[24px]';

    // Interact
    element.size = expectedSize;
    await element.updateComplete;

    // Test
    const buttonIconClasses = buttonIcon?.classList;
    const elementSize = element.size;
    expect(buttonIconClasses).toContain(expectedIconSizeClass);
    expect(elementSize).toBe(expectedSize);
  });

  it('should render with "2xl" size', async () => {
    // Setup
    const expectedSize = '2xl';
    const expectedIconSizeClassClass = '!text-[26px]';

    // Interact
    element.size = expectedSize;
    await element.updateComplete;

    // Test
    const buttonIconClasses = buttonIcon?.classList;
    const elementSize = element.size;
    expect(buttonIconClasses).toContain(expectedIconSizeClassClass);
    expect(elementSize).toBe(expectedSize);
  });

  it('should render with "3xl" size', async () => {
    // Setup
    const expectedSize = '3xl';
    const expectedIconSizeClassClass = '!text-[28px]';

    // Interact
    element.size = expectedSize;
    await element.updateComplete;

    // Test
    const buttonIconClasses = buttonIcon?.classList;
    const elementSize = element.size;
    expect(buttonIconClasses).toContain(expectedIconSizeClassClass);
    expect(elementSize).toBe(expectedSize);
  });
});

describe('ArtIconButton States', () => {
  let element: ArtIconButton;
  let button: HTMLElement | null | undefined;

  beforeAll(async () => {
    element = await fixture(html`<art-icon-button></art-icon-button>`);
    button = getByTestId(element, 'art-icon-button');
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
