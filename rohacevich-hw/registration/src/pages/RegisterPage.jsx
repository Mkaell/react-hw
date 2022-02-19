import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../components/SignUp'

const RegisterPage = () => {
    return (
        <>
            <h1>RegisterPage</h1>

            <SignUp />
            <p>
                Already have accounr <Link to='/login'>Sign in</Link>
            </p>
        </>

    )
}

export default RegisterPage