import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'
import { Route, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchingremove } from '../store/actionsCreators/actioncreators'

const HomePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuth, email } = useAuth()
    const local = localStorage.getItem('user');
    const handleLogOut = () => {

        dispatch(fetchingremove())
        localStorage.removeItem('user')
    }

    useEffect(() => {

        if (!local) {
            navigate('/login')
        }

    }, [local])

    return (
        <>
            <div>Welcom</div>
            <button onClick={() => handleLogOut()} >Log out {email}</button>
        </>
    )


}

export default HomePage