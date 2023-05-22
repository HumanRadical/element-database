export default function ElementCard(props) {
    return (
        <div className="card">
            <img className="card-image" src={props.bohr_model_image} alt="" />
            <h2 className="card-symbol">{props.symbol}</h2>
            <h3 className="card-name">{props.name}</h3>
            <h4 className="card-mass">{props.atomic_mass}</h4>
        </div>
    )
}