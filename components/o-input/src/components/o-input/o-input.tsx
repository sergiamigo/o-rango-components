// Hack For CssClassMap
export type CssClassMap = { [className: string]: boolean };
import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'o-input',
  styleUrl: 'o-input.scss',
  shadow: true,
})


export class OInputComponent {

  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop({ mutable: true, reflect: true }) value?: string | null = '';

  @Event() orangoFocus!: EventEmitter;
  @Event() orangoBlur!: EventEmitter;
  @Event() orangoChange!: EventEmitter;
  @Event() orangoInput!: EventEmitter;

  @State() isFocused: boolean;
  @State() isEmpty: boolean;

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

  @Prop() block?: boolean = false;
  // @Prop() type: string = 'default' //default, error, warning , info , success;
  @Prop() rounded?: boolean = false;

  @Prop({ reflectToAttr: true }) fill?: 'dashed' | 'outline' | 'solid' = 'solid';

  componentWillLoad() {
    this.isFocused = false;
    this.isEmpty = true;
  }

  private orangoFocusEventHandler(e: Event) {
    this.isFocused = !(e.target as HTMLInputElement).value.length || !this.value;
    this.orangoFocus.emit(e);
  }

  private orangoBlurEventHandler(e: Event) {
    this.isFocused = !!(e.target as HTMLInputElement).value.length;
    this.orangoBlur.emit(e);
  }

  private orangoChangeEventHandler(e: Event) {
    this.orangoChange.emit(e);
  }

  private orangoInputEventHandler(e: Event) {
    this.orangoInput.emit(e);
  }

  render() {
    return (
      <div class={{
        'o-input__container': true,
        'o-input__container--focus': this.isFocused,
        'o-input__container--blur': !this.isFocused,
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
        <div class="o-input__border"/>
      </div>
    );
  }
}
