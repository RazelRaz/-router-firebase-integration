import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';

const  auth = getAuth(app)

const Products = () => {
    // const {user} = useFirebase(); 

    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>This is Product</h2>
            <p>Current User: {user? user.displayName : 'Nobody'}</p>
        </div>
    );
};

export default Products;