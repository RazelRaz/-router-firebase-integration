import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>Login</h3>
            
            <div>
                <button onClick={signInWithGoogle}>Google sign in</button>
            </div>
            <form action="">
                <input type="email" placeholder='Your Email' name="" id="" />
                <br />
                <input type="password" placeholder='Password' name="" id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;