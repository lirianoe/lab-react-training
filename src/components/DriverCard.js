

const DriverCard = (props) => {

    return(
    <div>
        <div>
            <img className="image"src={props.img}/>
        </div>
        <p>{props.name}</p>
        <p>{props.rating}</p>
        <p>{props.car.model} - {props.car.licensePlate}</p>
        
    </div>
    )
}

export default DriverCard