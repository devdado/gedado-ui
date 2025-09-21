import { html } from 'lit';

export const renderLabel = ({ inputId, text }: { inputId: string; text: string }) => {
  return html` <label for="${inputId}" class="block text-sm leading-6 font-semibold text-accent-primary"> ${text} </label> `;
};
