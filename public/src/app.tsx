import React, { useState } from 'react';
import ReactInlineEdit from '../../src/main';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

export default () => {
  const [value, setValue] = useState('Hello inline edit');
  return (
    <Container>
      <ReactInlineEdit value={value} onChange={(e) => setValue(e.target.value)} />
    </Container>
  );
};
