import React, { useEffect, useState } from "react"
import './Github.css'
import axios from 'axios';


type SearchUserType = {
    login: string,
    id: number
}

type SearchResult = {
    items: SearchUserType[]
}

type UserType = {
    login: string,
    id: number,
    avatar_url: string,
    followers: number
}

export const Github = () => {
    const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
    const [userDetails, setUserDetails] = useState<UserType | null>(null)
    const [users, setUsers] = useState<SearchUserType[]>([])
    const [tempSearch, setTempSearch] = useState('mkaell')
    const [searchTerm, setsearchTerm] = useState('mkaell')


    useEffect(() => {
        console.log("Title");
        if (selectedUser) {
            document.title = selectedUser.login
        }
    }, [selectedUser])

    useEffect(() => {
        console.log("Axios");

        axios
            .get<SearchResult>(`https://api.github.com/search/users?q=${tempSearch}`)
            .then(response => {
                setUsers(response.data.items);
            })
    }, [searchTerm])
    useEffect(() => {
        console.log("Axios user");
        if (!!selectedUser) {
            axios
                .get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
                .then(response => {
                    setUserDetails(response.data);
                })
        }

    }, [selectedUser])

    return (
        <div className="container">
            <div>
                <div>
                    <input
                        value={tempSearch}
                        onChange={(e) => setTempSearch(e.currentTarget.value)}
                        type="text" />
                    <button onClick={() => {
                        setsearchTerm(tempSearch)
                    }}>Find</button>

                </div>
                <ul>
                    {users.map(user =>
                        <li key={user.id}
                            className={selectedUser === user ? 'selected' : ''}
                            onClick={() => {
                                setSelectedUser(user);
                            }}>
                            {user.login}
                        </li>)}
                </ul>
            </div>
            <div>
                {userDetails && <h2>{userDetails.login}</h2>}
                {userDetails && <div>
                    <img src={userDetails.avatar_url} alt={'avatar'} />
                    <br />
                    {userDetails.login}, followers: {userDetails.followers}
                </div>}
            </div>
        </div>
    )
}