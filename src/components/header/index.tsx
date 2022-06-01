import { Link as ReactRouterLink } from "react-router-dom";
import { Background, ButtonLink, Container, Logo } from "./styles/header";

const Header = ({ bg = true, children, ...restProps }: any) => {
  return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Frame = function HeaderFrame({ children, ...restProps }: any) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }: any) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }: any) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

export default Header;
