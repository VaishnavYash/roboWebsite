import React from 'react'

const Card = ({id, name, username, email}) => {
    return (
        <div className = 'bg-light-green dib br4 pa1 ma1 grow bw0 shadow-5 '>
            <img alt = 'robots' src ={'https://robohash.org/'+id+'?100x100'} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;