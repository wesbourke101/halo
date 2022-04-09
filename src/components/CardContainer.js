import Card from "./Card"

function CardContainer({characters}){

    const mappedCards =  characters.map(character => {
        return <Card id={character.id} name={character.name} bio={character.bio} image={character.image} affiliation={character.affiliation}/>
    })

    return (
        <div className="card-container">
            <h2>Click on each character card to find more information about them:</h2>
            {mappedCards}
        </div>
    )
}

export default CardContainer;