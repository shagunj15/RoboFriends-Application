import React from 'react';

// a cool thing to do is instead of writing (props), we can write ({id, name, email})
const Card = ({id, name, email}) => {
    return (
        <div className='tc bg-light-purple dib br4 pa3 ma2 grow bw3 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?100x100`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;