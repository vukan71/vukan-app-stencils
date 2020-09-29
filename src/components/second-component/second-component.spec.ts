import { newSpecPage } from '@stencil/core/testing';
import { SecondComponent } from './second-component';

describe('second-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SecondComponent],
      html: '<-component></-component>',
    });
    expect(root).toEqualHtml(`
      <second-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </second-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [SecondComponent],
      html: `<second-component first="Stencil" last="'Don't call me a framework' JS"></second-component>`,
    });
    expect(root).toEqualHtml(`
      <second-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </second-component>
    `);
  });
});
