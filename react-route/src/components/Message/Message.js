import React from 'react'
 
const Message = ({msg, bgColor}) => {

let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    backgroundColor: bgColor,
    fontWeight: "bold",
}

    return (
        <div style={styles}>
           {/* <p>{msg}</p> */}
           <p dangerouslySetInnerHTML={{__html:msg}}/>
        </div>
    )
}

export default Message