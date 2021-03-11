import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stencil-example',
  styleUrl: 'stencil-example.css',
  shadow: true,
})
export class StencilExample {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
