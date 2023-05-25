export default function InfoCard(props) {
    return (
        <div className="info-card">
            <button className="info-card-close" onClick={props.closeInfoCard}>x</button>
            <img className='info-card-image' src={props.image.url} alt=''/>
            <h2 className='info-card-number'>Element number: {props.number}</h2>
            <div className="info-card-details">
                <p><strong>Symbol:</strong> {props.symbol}</p>
                <p><strong>Name:</strong> {props.name}</p>
                <p><strong>Appearance:</strong> {props.appearance ? props.appearance : "???"}</p>
                <p><strong>Phase at STP:</strong> {props.phase}</p>
                <p><strong>Atomic mass:</strong> {props.atomic_mass} u</p>
                <p><strong>Summary:</strong> {props.summary}</p>
            </div>
        </div>
    )
}