import emptyDice from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'

const Dice = () => {

    
    const [image, setImage] = useState(emptyDice)

    return (
        <img src={image} onClick={() => {setImage() }}/>
    )

}