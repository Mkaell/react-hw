import React from 'react'
import Form from './Form'
import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { fetchingstart } from '../store/actionsCreators/actioncreators';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                localStorage.setItem('user', JSON.stringify(user.uid));
                dispatch(fetchingstart({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid
                }))
                navigate('/');
            })
            .catch(error => alert(error.message))
    }

    return (
        <>
            <Form
                title='Sign in'
                handleClick={handleLogin} />
        </>
    )
}

export default Login