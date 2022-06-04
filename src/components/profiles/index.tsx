import React from "react";
import { Container, Item, List, Name, Picture, Title } from "./styles/profiles";

const Profiles = ({ children, ...restProps }: any) => {
  return <Container {...restProps}>{children}</Container>;
};

Profiles.Title = ({ children, ...restProps }: any) => {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = ({ children, ...restProps }: any) => {
  return <List {...restProps}>{children}</List>;
};

Profiles.User = ({ children, ...restProps }: any) => {
  return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = ({ src, ...restProps }: any) => {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : "/images/misc/loading.gif"}
    />
  );
};

Profiles.Name = ({ children, ...restProps }: any) => {
  return <Name {...restProps}>{children}</Name>;
};

export default Profiles;
