import type { Preview } from '@storybook/web-components-vite';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: (a,b) => (a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }))
    },
    backgrounds: {
      options: {
        // 👇 Default options
        dark: { name: 'Light', value: '#f5f5f5' },
        light: { name: 'Dark', value: '#0f172a' },
        // 👇 Add your own
        maroon: { name: 'Orange', value: '#fff7ed' },
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  initialGlobals: {
    // 👇 Set the initial background color
    backgrounds: { value: 'Light' },
  },
  tags: [' autodocs']
};

export default preview;
