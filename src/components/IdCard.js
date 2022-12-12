
const IdCard = (props) => {
    return (
        <div>
            <div>
        <img src={props.picture}/>
            </div>
        <p><strong>First Name: </strong>{props.lastName}</p>
        <p><strong>Last Name : </strong>{props.firstName}</p>
        <p><strong>Gender: </strong>{props.gender}</p>
        <p><strong>Height: </strong>{props.height}</p>
        {/* <p><strong>Birth: </strong>{props.birth}</p> */}
        </div>
    )
}

export default IdCard