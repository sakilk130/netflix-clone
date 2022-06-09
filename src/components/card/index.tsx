import { createContext, useState, useContext } from "react";
import {
  Container,
  Content,
  Entities,
  Feature,
  FeatureClose,
  FeatureText,
  FeatureTitle,
  Group,
  Image,
  Item,
  Maturity,
  Meta,
  SubTitle,
  Text,
  Title,
} from "./styles/card";

interface IFeatureProvider {
  showFeature: boolean;
  setShowFeature: (value: any) => void;
  itemFeature: any;
  setItemFeature: (value: any) => void;
}

const FeatureContext = createContext<IFeatureProvider>({
  showFeature: false,
  setShowFeature: () => {},
  itemFeature: {},
  setItemFeature: () => {},
});

const Card = ({ children, ...restProps }: any) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
};

Card.Group = function CardGroup({ children, ...restProps }: any) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }: any) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }: any) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }: any) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Item = function CardItem({ item, children, ...restProps }: any) {
  const { setItemFeature, setShowFeature } = useContext(FeatureContext);
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Entities = function CardEntities({ children, ...restProps }: any) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }: any) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Image = function CardImage({ ...restProps }: any) {
  return <Image {...restProps} />;
};
Card.Feature = function CardFeature({ children, category, ...restProps }: any) {
  const { showFeature, itemFeature, setShowFeature } =
    useContext(FeatureContext);

  return showFeature ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  ) : null;
};

export default Card;
