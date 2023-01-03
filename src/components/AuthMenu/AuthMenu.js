import { NavLink } from 'react-router-dom';
import css from '../AuthMenu/AuthMenu.module.css';

const AuthMenu = () => {
    return (
        <div className={css.menu}>
            <NavLink className={css.link} to="/registration" >
                Registration
            </NavLink>
            <NavLink className={css.link} to="/login" >
                Log In
            </NavLink>
        </div>
    );
}

export default AuthMenu;