import {useState} from 'react'


function Card ({id, name, bio, image, affiliation}) {

    const [card, setFlipCard] = useState(true)

    function handleFlip (){
        setFlipCard(prev => !prev)
    }


    return (
        <div className="character-card">
               { card ? 
               <>
               <h3>{id}. {name}</h3>
               <img src={image} style={{height: "300px", width: "500px"}} alt="halo-character"onClick={handleFlip}/>
                </>
               :

               <>
               <p>{affiliation}</p>
               <p>{bio}</p>
               <button onClick={handleFlip} style={{color: "black"}}>return</button> 
               <p>___________________________________________________________</p>
               </>
               }
        </div>
    )
}

export default Card;