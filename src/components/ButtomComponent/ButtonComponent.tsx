import React from 'react';
import { Button } from 'antd';

const ButtonComponent = (props: any) => {
  return (
    <Button className="button-style" onClick={props.handleOnclick}>
      {props.title}
    </Button>
  );
};
export default ButtonComponent;
