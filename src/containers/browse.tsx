import { useContext, useEffect, useState } from "react";
import { Header, Loading } from "../components";
import { FirebaseContext } from "../context/firebase";
import SelectProfileContainer from "./profile";

const BrowseContainer = ({ slides }: any) => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  console.log(profile);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile?.displayName]);

  return profile?.displayName ? (
    <>
      {loading ? <Loading src={profile?.photoURL} /> : null}
      <Header src="joker1">
        <h1>Hello</h1>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;
