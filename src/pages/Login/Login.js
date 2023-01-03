import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import css from '../Login/Login.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();

    const handleChange = e => {
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(logIn({ email, password }));
    };

    return (
        <div className={css.login}>
            <h2 className={css.title}>Login</h2>
            <form className={css.loginForm} onSubmit={handleSubmit}>
                    <label className={css.label}>Email
                        <input
                            onInput={handleChange}
                            className={css.input}
                            value={email}
                            type="email"
                            placeholder="email"
                            name="email"
                            required
                        />
                    </label>
                    <label className={css.label}>Password
                        <input
                            onInput={handleChange}
                            className={css.input}
                            value={password}
                            type="password"
                            placeholder="password"
                            name="password"
                            required
                        />
                    </label>
                <button className={css.button} type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;