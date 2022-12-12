import { useState } from 'react'

const ClickablePicture = (props) => {
    const [image, setImage] = useState(props.img)

    return(
        
        <img src={image} onClick={() => {setImage(props.imgClicked) }}/>
    )



}

export default ClickablePicture