import { Button } from "antd";
import React from "react";

const FloatingButton = (props) => {
  return (
    <Button size="large" type="primary" shape="circle" {...props}>
      {props.children}
    </Button>
  );
};

export default FloatingButton;
