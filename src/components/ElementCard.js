export default function ElementCard(props) {
    return (
        <div className='card'>
            <h2 className='card-number'>{props.number}</h2>
            <img className='card-image' src={props.image.url} alt=''/>
            <h2 className='card-symbol'>{props.symbol}</h2>
            <h3 className='card-name'>{props.name}</h3>
            <h4 className='card-mass'>{props.atomic_mass}</h4>
        </div>
    )
}