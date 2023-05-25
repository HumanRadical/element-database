export default function InfoCard(props) {
    return (
        <div className="info-card">
            <img className='info-card-image' src={props.image.url} alt=''/>
            <h2 className='info-card-number'>Element number: {props.number}</h2>
            <h2 className='info-card-symbol'>Symbol: {props.symbol}</h2>
            <h3 className='info-card-name'>Name: {props.name}</h3>
        </div>
    )
}