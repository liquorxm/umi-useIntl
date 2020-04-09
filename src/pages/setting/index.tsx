import React, { useEffect } from 'react';
import { useIntl } from 'umi';

export default () => {
  useEffect(() => {
    console.log(useIntl);
    const obj;
    const { a } = obj;
    console.log(a);
  }, []);

  return <h1>setting</h1>;
};
