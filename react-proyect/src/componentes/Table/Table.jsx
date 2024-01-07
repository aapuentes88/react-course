import { useState } from 'react'
import Form from "./Form";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const { charactersData, remove } = props
    console.log("init TableBody")
    console.log(charactersData)
    console.log(remove)
    console.log("end TableBody")
    const rows = charactersData.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.job}</td>
                <td>
                    <button
                        className="btn btn-dark"
                        onClick={() => remove(index)}>
                        Delete</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )
}

const Table = (props) => {

    const { charactersData } = props

    // const [ objCharacters ] = useState({
    //     characters : charactersData, 
    //     removeCharacter : (prev, index) => {
    //         console.log("init removeCharacter")
    //         console.log(prev)
    //         const mcharacters = prev.filter((item, i) => {return i !== index})
    //         console.log(mcharacters)
    //         console.log("end removeCharacter")
    //         console.log("init objCharacters.characters")
    //         console.log(objCharacters.characters)
    //         objCharacters.characters = mcharacters
    //         console.log(objCharacters.characters)
    //         console.log("end objCharacters.characters")
    //         return objCharacters.characters
    //     }
    // })

    let [characters, removeCharacter] = useState(charactersData)
    let [chars, setCharacters] = useState(charactersData)
    
    const remove = (index) => {
        // const test = () => index
        const mcharacters = characters.filter((item, i) => { return i !== index })
        console.log(mcharacters + " index:" + index)
        setCharacters(mcharacters) 
        removeCharacter(mcharacters//(prev/*, index*/) => {
            // console.log("init removeCharacter")
            // console.log(prev)
            // const mcharacters = prev.filter((item, i) => { return i !== 0 })
            // console.log(mcharacters)
            // console.log("end removeCharacter")
            // console.log("init characters")
            // console.log(characters)
            // characters = mcharacters
            // console.log(characters)
            // console.log("end characters")
            // return mcharacters
        //}
        )
    };

    const addCharacter = (character) => {
        console.log("Init chars " + chars);
        console.log(`Character  ${character}`);
        const aux = [...chars, character]
        setCharacters((old) => aux);
        console.log("Chars " + chars);
        console.log("Aux " + aux);
        removeCharacter(aux)
        console.log("Character " + characters);

    };

    console.log("init Table")
    // console.log(objCharacters)
    // console.log(objCharacters)
    console.log(characters)
    // console.log(removeCharacter)
    console.log("end Table")

    return (
        <>
        <table className="table">
            <TableHeader />
            {/* <TableBody charactersData={objCharacters.characters} removeCharacter={objCharacters.removeCharacter}/> */}
            <TableBody charactersData={characters} remove={remove} />
        </table>
        <Form addCharacter = {addCharacter}/>
        </>
    )
}


export default Table