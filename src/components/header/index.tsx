import { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  ButtonLink,
  Container,
  Logo,
  Feature,
  Text,
  Link,
  FeatureCallOut,
  Group,
  Profile,
  Picture,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from "./styles/header";

const Header = ({ bg = true, children, ...restProps }: any) => {
  return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Frame = ({ children, ...restProps }: any) => {
  return <Container {...restProps}>{children}</Container>;
};

Header.Profile = ({ children, ...restProps }: any) => {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = ({ src, ...restProps }: any) => {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = ({ children, ...restProps }: any) => {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Group = ({ children, ...restProps }: any) => {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = ({ to, ...restProps }: any) => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}: any) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
};

Header.Feature = ({ children, ...restProps }: any) => {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Text = ({ children, ...restProps }: any) => {
  return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = ({ children, ...restProps }: any) => {
  return <Link {...restProps}>{children}</Link>;
};

Header.FeatureCallOut = ({ children, ...restProps }: any) => {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.ButtonLink = ({ children, ...restProps }: any) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.PlayButton = ({ children, ...restProps }: any) => {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

export default Header;
