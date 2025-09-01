import { html } from 'lit';

export const renderValidationMessage = ({ message }: { message: string }) => {
  return html`<div class="text-xs text-status-error">${message}</div>`;
};
