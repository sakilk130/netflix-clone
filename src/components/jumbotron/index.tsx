import React, { ReactNode } from "react";
import {
  Inner,
  Container,
  Title,
  Pane,
  SubTitle,
  Image,
  Item,
} from "./styles/jumbotron";

interface IJumbotron {
  children: ReactNode;
  direction?: string;
  restProps?: any;
}

const Jumbotron = ({
  children,
  direction = "row",
  ...restProps
}: IJumbotron) => {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

Jumbotron.Container = function JumbotronContainer({
  children,
  ...restProps
}: IJumbotron) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({
  children,
  ...restProps
}: IJumbotron) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({
  children,
  ...restProps
}: IJumbotron) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({
  children,
  ...restProps
}: IJumbotron) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }: any) {
  return <Image {...restProps} />;
};

export default Jumbotron;
