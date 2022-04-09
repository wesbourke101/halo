function Header({formData, setFormData, saveCharacter}){


    function handleChange(e){
        setFormData(({...formData, [e.target.name]: e.target.value}))
    }

    return(
        <div className="Header">
            <h1>Halo Character Database:</h1>
            <h2>Submit New Characters to add to the database:</h2>
            <form style={{color: "black"}} onSubmit={saveCharacter}>
                <input type="text" name="name" placeholder="input character name..." onChange={handleChange}/>
                <input type="text" name="bio" placeholder="input character bio.." onChange={handleChange}/>
                <input type="text" name="image" placeholder="input image url..." onChange={handleChange}/>
                <select name="affiliation" style={{color: "black"}} onChange={handleChange}>
                    <option value="UNSC">UNSC</option>
                    <option value="Covenant">Covenant</option>
                    <option value="Banished">Banished</option>
                    <option value="Forerunner">Forerunner</option>
                    <option value="Flood">Flood</option>
                </select>
                <input type="submit" value="[+]"/>
            </form>
        </div>
    )
}

export default Header;