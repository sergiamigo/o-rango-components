// Hack For CssClassMap
export type CssClassMap = { [className: string]: boolean };
import { Component, Element, Event, EventEmitter, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'o-input',
  styleUrl: 'o-input.scss',
  shadow: true,
})


export class OInputComponent {

  /**
   * Label text of the input
   */
  @Prop({ reflect: true }) label: string;
  /**
   * Text that shows before the input has a value.
   */
  @Prop({ reflect: true }) placeholder?: string;
  /**
   * The value of the input.
   */
  @Prop({ mutable: true, reflect: true }) value?: string | null = '';

  @Event() orangoFocus!: EventEmitter;
  @Event() orangoBlur!: EventEmitter;
  @Event() orangoChange!: EventEmitter;
  @Event() orangoInput!: EventEmitter;

  @State() isFocused: boolean;
  @State() isEmpty: boolean;

  @Element() el: HTMLElement;

  @Prop() autoComplete: any; // lg - md - sm
  @Prop() autoFocus: any;
  @Prop() form: any;
  @Prop() innerRef: any;
  @Prop() maxLength: any;
  @Prop() min: any;
  @Prop() max: any;
  @Prop() name: any;
  @Prop() onKeyDown: any;
  @Prop() onKeyPress: any;
  @Prop() onKeyUp: any;
  @Prop() pattern: any;
  @Prop() readOnly: any;
  @Prop() required: any;
  @Prop() spellCheck: any;
  @Prop() type: any;

  @Prop({ reflectToAttr: true }) disabled: boolean = false;

  componentWillLoad() {
    this.isFocused = false;
    this.isEmpty = !this.value.length && !this.placeholder;
  }

  private orangoFocusEventHandler(e: Event) {
    this.isFocused = true;
    this.isEmpty = !this.value.length && !this.placeholder && !this.isFocused;
    this.orangoFocus.emit(e);
  }

  private orangoBlurEventHandler(e: Event) {
    this.isFocused = false;
    this.isEmpty = !this.value.length && !this.placeholder;
    this.orangoBlur.emit(e);
  }

  private orangoInputEventHandler(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.isEmpty = !this.value.length && !this.isFocused && !this.placeholder;
    this.orangoInput.emit(e);
  }

  private orangoChangeEventHandler(e: Event) {
    this.orangoChange.emit(e);
  }

  render() {
    return (
      <div class={{
        'o-input__container': true,
        'o-input__container--active': !this.isEmpty,
        'o-input__container--focus': this.isFocused,
      }}>
        <label class="o-input__label">{this.label}</label>
        <input
          class="o-input__field"
          autoComplete={this.autoComplete}
          autoFocus={this.autoFocus}
          disabled={this.disabled}
          form={this.form}
          maxLength={this.maxLength}
          min={this.min}
          max={this.max}
          name={this.name}
          onBlur={(e) => this.orangoBlurEventHandler(e)}
          onChange={(e) => this.orangoChangeEventHandler(e)}
          onInput={(e) => this.orangoInputEventHandler(e)}
          onFocus={(e) => this.orangoFocusEventHandler(e)}
          onKeyDown={this.onKeyDown}
          onKeyPress={this.onKeyPress}
          onKeyUp={this.onKeyUp}
          pattern={this.pattern}
          placeholder={this.placeholder}
          readOnly={this.readOnly}
          required={this.required}
          spellCheck={this.spellCheck}
          type={this.type}
          value={this.value}
        />
        {this.el.getAttribute('filled')=== '' ?
          <div class="o-input__filled"/> :
          <div class="o-input__outline">
            <div class="o-input__outline--left"/>
            <div class="o-input__outline--top"/>
            <div class="o-input__outline--right"/>
            <div class="o-input__outline--bottom"/>
          </div>}
      </div>
    );
  }
}
