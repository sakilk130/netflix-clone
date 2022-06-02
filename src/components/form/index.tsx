import React from "react";
import {
  Base,
  Container,
  Error,
  Input,
  Link,
  Submit,
  Text,
  TextSmall,
  Title,
} from "./styles/form";

const Form = ({ children, ...restProps }: any) => {
  return <Container {...restProps}>{children}</Container>;
};

Form.Error = function FormError({ children, ...restProps }: any) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }: any) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }: any) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }: any) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }: any) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restProps }: any) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Input = function FormInput({ ...restProps }: any) {
  return <Input {...restProps} />;
};

Form.Submit = function FormSubmit({ children, ...restProps }: any) {
  return <Submit {...restProps}>{children}</Submit>;
};

export default Form;
