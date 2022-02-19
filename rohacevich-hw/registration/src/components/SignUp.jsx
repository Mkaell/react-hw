import React from 'react'
import Form from './Form'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { fetchingstart } from '../store/actionsCreators/actioncreators';
const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
            .catch(error => console.error(error))
    }

    return (
        <>
            <Form
                title='Register'
                handleClick={handleRegister} />
        </>
    )
}

export default SignUp