import { Container, Subtitle, Title } from "./styles/feature";

const Feature = ({ children, ...restProps }: any) => {
  return <Container {...restProps}>{children}</Container>;
};

Feature.Title = function FeatureTitle({ children, ...restProps }: any) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }: any) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

export default Feature;
