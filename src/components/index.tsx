import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component } from 'react';

const CLASS_NAME = 'react-inline-edit';

export type ReactInlineEditProps = {
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
};

export default class ReactInlineEdit extends Component<ReactInlineEditProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    onChange: noop
  };

  state = {
    value: this.props.value,
    editingValue: this.props.value,
    editing: false
  };

  start = () => {
    this.setState({ editing: true });
  };

  editing = (inValue) => {
    this.setState({ editingValue: inValue });
  };

  confirm = () => {
    const { onChange } = this.props;
    const value = this.state.editingValue;
    this.setState({ value, editing: false });
    onChange!({ target: { value } });
  };

  cancel = () => {
    this.setState({ editing: false, editingValue: this.state.value });
  };

  shouldComponentUpdate(nextProps: Readonly<ReactInlineEditProps>): boolean {
    const { value } = nextProps;
    if (value !== this.props.value) {
      if (value !== this.state.value) {
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
    if (key === 'Enter') {
      this.confirm();
    }
  };

  handleBlur = () => {
    this.cancel();
  };

  render() {
    const { className, onChange, children, ...props } = this.props;
    const { editingValue, editing } = this.state;

    return (
      <div data-component={CLASS_NAME} className={classNames(CLASS_NAME, className)} {...props}>
        <div hidden={editing} className="is-label" onDoubleClick={this.handleDblClick}>
          {editingValue}
        </div>
        <input
          hidden={!editing}
          type="text"
          value={editingValue}
          onChange={this.handleInputChange}
          onKeyUp={this.handleInputKeyUp}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}
