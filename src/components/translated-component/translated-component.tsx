import { Component, Element, h } from "@stencil/core";
import { getLocaleComponentStrings } from "../../utils/locale";

@Component({
  tag: "translated-component",
  styleUrl: "./translated-component.css",
  shadow: true
})
export class TranslatedComponent {
  @Element() element: HTMLElement;
  strings: any;

  async componentWillLoad(): Promise<void> {
    this.strings = await getLocaleComponentStrings(this.element);
  }

  render() {
    return (
      <div>
        {this.strings.title} - {this.strings.subTitle}
      </div>
    );
  }
}
