import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './first-component';

describe('first-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<first-component></first-component>',
    });
    expect(root).toEqualHtml(`
      <first-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </first-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<first-component first="Stencil" last="'Don't call me a framework' JS"></first-component>`,
    });
    expect(root).toEqualHtml(`
      <first-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </first-component>
    `);
  });
});
