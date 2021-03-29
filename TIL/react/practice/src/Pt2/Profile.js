import React from 'react'

const profileData = {
    naruto: {
        name:'나루토',
        description: '나루토 만화 주인공'
    },
    reborn: {
        name: '리본',
        description: '가정교사히트맨리본 캐릭터'
    }
}

function Profile( {match} ) {
    const { username } = match.params;
    const profile = profileData[username];

    if(!profile){
        return <div>존재하지 않는 사용자입니다.</div>
    }

    return (
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>
                {profile.description}
            </p>
        </div>
    )
}



export default Profile
