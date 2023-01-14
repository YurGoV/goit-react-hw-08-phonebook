// import {isLoggedIn} from "./utils/utils";
import {Navigate} from "react-router-dom";

// import {selectIsLogged} from "../redux/selectors";
import {useSelector} from "react-redux";
import {selectIsLogged} from "redux/selectors";
import {selectIsRefreshing} from "redux/selectors";


export const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
  const isLogged = useSelector(selectIsLogged);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLogged && !isRefreshing
  console.log(isLogged, isRefreshing);

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
}
