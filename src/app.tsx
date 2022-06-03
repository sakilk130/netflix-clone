import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";
import { Browse, Home, SignIn, SignUp } from "./pages";

const App = () => {
  const { user } = useAuthListener();
  console.log(user);
  // const user: any = null;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES.BROWSE}
          element={<ProtectedRoute user={user} path={ROUTES.SIGN_IN} />}
        >
          <Route path={ROUTES.BROWSE} element={<Browse />} />
        </Route>
        <Route
          path={ROUTES.SIGN_IN}
          element={<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} />}
        >
          <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        </Route>
        <Route
          path={ROUTES.SIGN_UP}
          element={<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} />}
        >
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        </Route>

        <Route
          path={ROUTES.HOME}
          element={<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} />}
        >
          <Route path={ROUTES.HOME} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
