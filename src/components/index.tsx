import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component } from 'react';
import ReactInputAutosize from 'react-input-autosize';

const CLASS_NAME = 'react-inline-edit';

type BaseProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'onChange'>;

export interface ReactInlineEditProps extends BaseProps {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * The label text.
   */
  value?: string;
  /**
   * The change handler.
   */
  onChange?: Function;
}

export default class ReactInlineEdit extends Component<ReactInlineEditProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    onChange: noop
  };

  private confirmedValue = this.props.value;

  state = {
    value: this.props.value,
    editing: false
  };

  start = () => {
    this.setState({ editing: true });
  };

  editing = (inValue) => {
    this.setState({ value: inValue });
  };

  confirm = () => {
    const { onChange } = this.props;
    const { value } = this.state;
    this.confirmedValue = value;
    this.setState({ editing: false });
    onChange!({ target: { value } });
  };

  cancel = () => {
    this.setState({ editing: false, value: this.confirmedValue });
  };

  shouldComponentUpdate(nextProps: Readonly<ReactInlineEditProps>): boolean {
    const { value } = nextProps;
    if (value !== this.props.value) {
      if (value !== this.confirmedValue) {
        this.confirmedValue = value;
        this.setState({ value });
      }
    }
    return true;
  }

  handleDblClick = () => {
    this.start();
  };

  handleInputChange = (inEvent) => {
    const { value } = inEvent.target;
    this.editing(value);
  };

  handleInputKeyUp = (inEvent) => {
    const { key } = inEvent;
    if (key === 'Enter') this.confirm();
    if (key === 'Escape') this.cancel();
  };

  render() {
    const { className, onChange, children, ...props } = this.props;
    const { value, editing } = this.state;

    return (
      <div data-component={CLASS_NAME} className={classNames(CLASS_NAME, className)} {...props}>
        <label hidden={editing} className="is-label" onDoubleClick={this.handleDblClick}>
          {value}
        </label>
        <ReactInputAutosize
          hidden={!editing}
          type="text"
          value={value}
          onChange={this.handleInputChange}
          onKeyUp={this.handleInputKeyUp}
          onBlur={this.cancel}
        />
      </div>
    );
  }
}
