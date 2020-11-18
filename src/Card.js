
export default function Card({character}) {
    const {name, image, status} = character
    return (
            <div>
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <h3>{status}</h3>
            </div>
        ) 
}
