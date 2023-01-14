// import {isLoggedIn} from "./utils/utils";
import {Navigate} from "react-router-dom";

// import {selectIsLogged} from "../redux/selectors";
import {useSelector} from "react-redux";
import {selectIsLogged} from "redux/selectors";


export const RestrictedRoute = ({component: Component, redirectTo = '/'}) => {
  const isLogged = useSelector(selectIsLogged);
  console.log(isLogged);

  return isLogged ? <Navigate to={redirectTo} /> : <Component />;
}
