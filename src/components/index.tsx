import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component, createRef } from 'react';
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
  /**
   * The inner input classname.
   */
  inputClassName?: string;
}

export default class ReactInlineEdit extends Component<ReactInlineEditProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    onChange: noop
  };

  private confirmedValue = this.props.value;
  private rootRef = createRef<HTMLDivElement>();

  state = {
    value: this.props.value,
    editing: false
  };


  constructor(inProps) {
    super(inProps);
    window.addEventListener('click', this.docClick);
  }

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

  componentWillUnmount() {
    window.removeEventListener('click', this.docClick);
  }

  start = () => {
    this.setState({ editing: true }, () => {
      const inputEl = this.rootRef.current?.querySelector('input') as HTMLInputElement;
      inputEl.focus();
    });
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

  docClick = (inEvent) => {
    const { target } = inEvent;
    const root = this.rootRef.current;
    if (target.contains(root)) this.cancel();
  };

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
    const { className, onChange, children, inputClassName, ...props } = this.props;
    const { value, editing } = this.state;

    return (
      <div ref={this.rootRef} data-component={CLASS_NAME} className={classNames(CLASS_NAME, className)} {...props}>
        <label hidden={editing} className='is-label' onDoubleClick={this.handleDblClick}>
          {value}
        </label>
        {
          editing && <ReactInputAutosize
            inputClassName={inputClassName}
            type='text'
            value={value}
            onChange={this.handleInputChange}
            onKeyUp={this.handleInputKeyUp}
            onBlur={this.cancel}
          />
        }
      </div>
    );
  }
}
