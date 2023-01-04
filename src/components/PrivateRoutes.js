import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes = ({ component: Component, redirectTo = '/' }) => {
    const {isLoggedIn} = useSelector(state => state.auth);
    const {isRefreshing} = useSelector(state => state.auth);
    return !isLoggedIn && !isRefreshing ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoutes;