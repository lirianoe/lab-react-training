import { useState } from 'react'

const LikeButton = () => {
    const [number, setNumber] = useState(0)

    return (
        <button onClick={() => {
            setNumber(number + 1)
        }}>
            {number} Likes</button>
    )
}

export default LikeButton