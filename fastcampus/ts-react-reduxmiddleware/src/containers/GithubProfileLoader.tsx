import React from 'react'
import GithubProfileInfo from '../components/GithubProfileInfo'
import GithubUsernameForm from '../components/GithubUsernameForm'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../modules'
import { getUserProfile } from '../api/github'
import { getUserProfileThunk } from '../modules/github'

function GithubProfileLoader() {
    const {data, loading, error} = useSelector((state: RootState) => state.github.userProfile);
    const dispatch = useDispatch();

    const onSubmitUsername = (username: string) => {
        dispatch(getUserProfileThunk(username));
    }


    return (
        <>
        <GithubUsernameForm onSubmitUsername={onSubmitUsername}/>
        {loading && <p style={{textAlign: 'center'}}>로딩중...</p>}
        {error && <p style={{textAlign: 'center'}}>에러 발생...</p>}
        {data && (
            <GithubProfileInfo 
            name={data.name}
            blog={data.blog}
            bio={data.bio}
                thumbnail={data.avatar_url}
            />
            )}
        </>
    )
}

export default GithubProfileLoader;
