import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthMenu from '../AuthMenu/AuthMenu';
import css from './AppBar.module.css';

const AppBar = () => {
    const isloggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <header className={css.header}>
            <Navigation />
            {isloggedIn ? <UserMenu /> : <AuthMenu />} 
        </header>
    );
};

export default AppBar;