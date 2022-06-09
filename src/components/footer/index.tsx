import React, { ReactNode } from "react";
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from "./styles/footer";

export interface IFooter {
  children?: ReactNode;
  restProps?: any;
}

const Footer = ({ children, ...restProps }: IFooter) => {
  return <Container {...restProps}>{children}</Container>;
};

Footer.Row = function FooterRow({ children, ...restProps }: IFooter) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }: IFooter) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }: any) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }: IFooter) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }: IFooter) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...restProps }: IFooter) {
  return <Break {...restProps}>{children}</Break>;
};

export default Footer;
