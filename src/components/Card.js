function Card ({id, name, bio, image, affiliation}) {


    return (
        <div className="character-card">
               <h3>{id}. {name}</h3>
               <img src={image} style={{height: "300px", width: "500px"}} alt="halo-character"/>
               <p>{affiliation}</p>
               <p>{bio}</p> 
               <p>___________________________________________________________</p>
        </div>
    )
}

export default Card;