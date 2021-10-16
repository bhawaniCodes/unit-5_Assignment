import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom"
import { getLoginState } from "../redux/authReducer/action";

export const PrivateRoute = ({ children, path }) => {
    const dispatch = useDispatch();
    const data = JSON.parse(localStorage.getItem('authState'));
    dispatch(getLoginState(data))
    const authState = useSelector((state) => state.authState.authState);
    console.log('authState:', authState)
    
    if (authState) {
        return <Route path={path}>{children}</Route>;
    } else {
        return <Redirect to="/login" />;
    }
}