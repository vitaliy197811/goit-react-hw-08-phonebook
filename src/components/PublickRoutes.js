import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublickRoutes = ({ component: Component, redirectTo = '/' }) => {
    const {isLoggedIn} = useSelector(state => state.auth);
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PublickRoutes;