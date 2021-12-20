import React, { useState, useEffect } from 'react';
import ReactInlineEdit from '../../src/main';
import styled from 'styled-components';
import '../../src/components/style.scss';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

export default () => {
  const [value, setValue] = useState('Hello inline edit');

  useEffect(() => {
    console.log('value changed:', value);
  }, [value]);

  return (
    <Container>
      <ReactInlineEdit value={value} inputClassName='test-cls'
                       onChange={(e) => setValue(e.target.value)} />
    </Container>
  );
};
