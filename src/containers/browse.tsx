import { useContext, useEffect, useState } from "react";
import { Card, Header, Loading } from "../components";
import { FirebaseContext } from "../context/firebase";
import SelectProfileContainer from "./profile";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

const BrowseContainer = ({ slides }: any) => {
  const [category, setCategory] = useState("series");
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [slideRows, setSlideRows] = useState<any>([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  console.log(profile);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile?.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [category, slides]);

  return profile?.displayName ? (
    <>
      {loading ? <Loading src={profile?.photoURL} /> : null}
      <Header src="joker1">
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink
              active={category === "series" ? true : false}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? true : false}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={profile?.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={profile?.photoURL} />
                  <Header.TextLink>{user?.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            cumque, itaque, mollitia ad necessitatibus animi eligendi sint
            officiis amet voluptatibus repellat dolorum. Dolor deserunt,
            mollitia nobis quas incidunt magnam doloremque!
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem: any) => (
          <Card key={`${category}-${slideItem?.title?.toLowerCase()}`}>
            <Card.Title>{slideItem?.title}</Card.Title>
            <Card.Entities>
              {slideItem?.data?.map((item: any) => (
                <Card.Item key={item?.id} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item?.genre}/${item?.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item?.title}</Card.SubTitle>
                    <Card.Text>{item?.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <p>Hello</p>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;
