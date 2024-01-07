import React from "react";

const Frutas = (props) => {
    // const frutas = ["🍉", "🍌", "🍓"]; //

    return (
        //<div className="container"> //El return devuelve un solo elemento 
        //si no quiero un div para encapsular todos los elementos(ul y p) en uno solo
        //uso Fragment
        //<React.Fragment>//o
        <>
        <ul>
            {props.frutasApp.map((fruta, i) => (
                <li key={fruta}>
                    {i + 1} - {fruta}
                </li>
            ))}
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum earum, distinctio repellendus eius culpa impedit commodi! Nisi, quisquam, perspiciatis incidunt atque sed illum odit, rem a exercitationem veritatis accusantium? Esse.</p>
        </>
        //</React.Fragment>
        //</div>
    );

}

export default Frutas