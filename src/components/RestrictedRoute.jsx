import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsLogged} from "redux/selectors";


export const RestrictedRoute = ({component: Component, redirectTo = '/'}) => {
  const isLogged = useSelector(selectIsLogged);
  return isLogged
    ? <Navigate to={redirectTo}/>
    : <Component/>;
}
