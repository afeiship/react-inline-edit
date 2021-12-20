import * as React from 'react';
import { render } from '@testing-library/react';
import ReactInlineEdit from '../src/main';

describe('01/basic props', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('<ReactInlineEdit /> component should be displayed', () => {
    render(<ReactInlineEdit />);
    const el = document.querySelector('.react-inline-edit');
    expect(el!.tagName).toBe('DIV');
  });

  test('<ReactInlineEdit /> set value should be in label', () => {
    render(<ReactInlineEdit value="hello" />);
    const el = document.querySelector('.react-inline-edit .is-label') as HTMLLabelElement;
    expect(el.innerHTML.includes('hello')).toBeTruthy();
  });

  // todo: how to simulate
  // test.only('<ReactInlineEdit /> change value confirm/cancel should be worked', () => {
  //   render(<ReactInlineEdit value="hello" onChange={(e) => console.log(e.target.value)} />);
  //   const labelEl = document.querySelector('.react-inline-edit .is-label') as HTMLInputElement;
  //   const inputEl = document.querySelector('.react-inline-edit input') as HTMLInputElement;
  //   // confirm
  //   fireEvent.dblClick(labelEl);
  //   fireEvent.focus(inputEl);
  //   fireEvent.keyUp(inputEl, { key: 'a', code: 'KeyA' });
  //   fireEvent.keyUp(inputEl, { key: 'b', code: 'KeyB' });
  //   fireEvent.keyUp(window, { key: 'Enter', code: 'Enter' });
  //   console.log(inputEl.value, document.body.innerHTML);
  // });
});
