export default function ElementCard(props) {
    return (
        <div className='element-card' onClick={() => props.selectCurrentElement(props.number)}>
            <h2 className='element-card-number'>{props.number}</h2>
            <img className='element-card-image' src={props.image.url} alt=''/>
            <h3 className='element-card-symbol'>{props.symbol}</h3>
            <h4 className='element-card-name'>{props.name}</h4>
        </div>
    )
}