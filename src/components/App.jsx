import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshUser } from '../redux/auth/authOperations';
import Layout  from './Layout';
import PrivateRoutes from 'components/PrivateRoutes';
import PublickRoutes from 'components/PublickRoutes';

const Home = lazy(() => import('../pages/Home'));
const Registration = lazy(() => import('../pages/Registration/Registration'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/registration"
              element={<PublickRoutes redirectTo="/contacts" component={<Registration />} />}
            />
            <Route
              path="/login"
              element={<PublickRoutes redirectTo="/contacts" component={<Login />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoutes redirectTo="/login" component={<Contacts />} />}
            />
          </Route>
        </Routes>
      </>
    )
  );
};

export default App;