import { newE2EPage } from '@stencil/core/testing';

describe('stencil-example', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-example></stencil-example>');

    const element = await page.find('stencil-example');
    expect(element).toHaveClass('hydrated');
  });
});
