import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";

const useContent = (target: any) => {
  const [content, setContent] = useState<any>([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot: any) => {
        const allContent = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContent(allContent);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, []);

  return {
    content,
  };
};

export default useContent;
