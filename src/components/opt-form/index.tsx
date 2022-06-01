import { ReactNode } from "react";
import { Break, Button, Container, Input, Text } from "./styles/opt-form";

export interface IOptForm {
  children?: ReactNode;
  restProps?: any;
}

const OptForm = ({ children, ...restProps }: IOptForm) => {
  return <Container {...restProps}>{children}</Container>;
};

OptForm.Input = function OptFormInput({ ...restProps }: any) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }: IOptForm) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }: IOptForm) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }: IOptForm) {
  return <Break {...restProps} />;
};

export default OptForm;
