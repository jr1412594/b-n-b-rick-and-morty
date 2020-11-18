import Card from "./Card";
export default function CardContainer(props) {

    const eachCharacter = () => {
        return props.characters.map(
            character => {
                return (
                    <Card character={character} />
            
                ) 
            }
        )
    }

    return (
        <div>
            <h1>cardContainer</h1>
            {eachCharacter()}
        </div>
    )
}
