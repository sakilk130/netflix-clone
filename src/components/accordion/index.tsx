import React, { createContext, useContext, useState } from "react";
import {
  Body,
  Container,
  Frame,
  Header,
  Inner,
  Item,
  Title,
} from "./styles/accordion";

export interface IAccordion {
  children: React.ReactNode;
  otherProps?: any;
}
interface IToggleContext {
  toggleShow: boolean;
  setToggleShow: (value: any) => void;
}

const ToggleContext = createContext<IToggleContext>({
  toggleShow: false,
  setToggleShow: () => {},
});

const Accordion = ({ children, ...otherProps }: IAccordion) => {
  return (
    <Container {...otherProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Title = function AccordionTitle({
  children,
  ...otherProps
}: IAccordion) {
  return <Title {...otherProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({
  children,
  ...restProps
}: IAccordion) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({
  children,
  ...otherProps
}: IAccordion) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...otherProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({
  children,
  ...otherProps
}: IAccordion) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      {...otherProps}
      onClick={() => setToggleShow((toggleShow: boolean) => !toggleShow)}
    >
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({
  children,
  ...restProps
}: IAccordion) {
  const { toggleShow } = useContext(ToggleContext);
  return (
    <Body className={toggleShow ? "open" : "closed"} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};

export default Accordion;
