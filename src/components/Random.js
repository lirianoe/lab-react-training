
const Random = (props) => {
    let myRandomNumber = Math.floor(Math.random() * (props.max - props.min) + props.min)

    return (
       <p>Random value between {props.min} and {props.max} = {myRandomNumber}</p>
    )


}

export default Random