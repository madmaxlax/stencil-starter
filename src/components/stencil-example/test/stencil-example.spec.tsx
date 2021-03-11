import { newSpecPage } from '@stencil/core/testing';
import { StencilExample } from '../stencil-example';

describe('stencil-example', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilExample],
      html: `<stencil-example></stencil-example>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-example>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-example>
    `);
  });
});
