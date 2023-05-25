export default function InfoCard(props) {
    return (
        <div className="info-card">
            <button className="info-card-close" onClick={props.closeInfoCard}>x</button>
            <img className='info-card-image' src={props.image.url} alt=''/>
            <h2 className='info-card-number'>Element number: {props.number}</h2>
            <div className="info-card-details">
                <p>Symbol: {props.symbol}</p>
                <p>Name: {props.name}</p>
                <p>Appearance: {props.appearance ? props.appearance : "???"}</p>
                <p>Phase at STP: {props.phase}</p>
                <p>Atomic mass: {props.atomic_mass}</p>
                <p>Summary: {props.summary}</p>
            </div>
        </div>
    )
}