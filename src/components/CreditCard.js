    


const CreditCard = (props) => {
    const divStyle = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    }

       
    return (
        <div style={divStyle}>
        <h1>Card</h1>
        <p>{props.type}</p>
        <p>{"***** ***** " + props.number%100000}</p>
        <p>{props.expirationMonth}</p>
        <p>{props.expirationYear}</p>
        <p>{props.bank}</p>
        <p>{props.owner}</p>
        <p>{props.bgColor}</p>
        <p>{props.color}</p>
        </div>
    )
}

export default CreditCard