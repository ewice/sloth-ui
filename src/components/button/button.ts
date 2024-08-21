import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styles from './button.css';

@customElement('sloth-button')
export class Button extends LitElement {
  static override styles = [styles];

  @property()
  name = 'World';

  override render() {
    return html` <button>Test</button> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sloth-button': Button;
  }
}
