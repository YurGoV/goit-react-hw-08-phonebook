import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsLogged, selectIsRefreshing} from "redux/selectors";


export const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
  const isLogged = useSelector(selectIsLogged);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLogged && !isRefreshing

  return shouldRedirect ? <Navigate to={redirectTo}/> : <Component/>;
}
