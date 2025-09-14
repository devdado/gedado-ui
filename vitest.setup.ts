import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

vi.mock('@/styles/injectables/shared-tailwind.ts', () => {
  return {
    getSharedTailwindStyles: vi.fn(() => ({
      replaceSync: vi.fn(),
    })),
  };
});
