import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import css from '../UserMenu/UserMenu.module.css';

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.auth.user.name);

    return (
        <div className={css.menu}>
            <p className={css.name}>Welcome, {name}</p>
            <button className={css.btn} type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    );
}

export default UserMenu;