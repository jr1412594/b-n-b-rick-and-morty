import CardContainer from "./CardContainer";

export default function MainContainer(props){


    
    return(
        <div>
            <h1>return</h1>
            <CardContainer characters={props.characters} />
        </div>
    )
}