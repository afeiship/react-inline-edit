# react-inline-edit
> Inline editing for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-inline-edit
```

## usage
1. import css
  ```scss
  @import "~@jswork/boilerplate-react-component/dist/style.css";

  // or use sass
  @import "~@jswork/boilerplate-react-component/dist/style.scss";

  // customize your styles:
  $boilerplate-react-component-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactInlineEdit from '@jswork/boilerplate-react-component';
  import styled from 'styled-components';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  export default (props: any) => {
    return (
      <Container>
        <ReactInlineEdit />
      </Container>
    );
  };

  ```

## preview
- https://afeiship.github.io/react-inline-edit/

## license
Code released under [the MIT license](https://github.com/afeiship/react-inline-edit/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-inline-edit
[version-url]: https://npmjs.org/package/@jswork/react-inline-edit

[license-image]: https://img.shields.io/npm/l/@jswork/react-inline-edit
[license-url]: https://github.com/afeiship/react-inline-edit/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-inline-edit
[size-url]: https://github.com/afeiship/react-inline-edit/blob/master/dist/react-inline-edit.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-inline-edit
[download-url]: https://www.npmjs.com/package/@jswork/react-inline-edit
