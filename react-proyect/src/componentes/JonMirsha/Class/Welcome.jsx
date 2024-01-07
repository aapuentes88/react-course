import React, { Component } from 'react'

export class WelcomeES6 extends Component {
    constructor() {
        super();

        this.state = {
            title: "Hola Mundo",
            counter: 0
        };

        // tenemos que enlazar el método al contexto actual
        this.updateText = this.updateText.bind(this);
        this.sumar = this.sumar.bind(this);
    }

    updateText() {
        // console.log(this + "---------------------------------updateText()----------------------")
        this.setState({
            title: "Hello World",
        });
    }

    sumar() {
        // console.log(this + "---------------------------------sumar()----------------------")
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    render() {
        // console.log(this)

        return <>
            <h1 onClick={this.updateText}>{this.state.title} ES6</h1>
            <h1>{this.state.counter}</h1>
            <nav>
                <button
                    className="btn btn-sm btn-danger float-right mx-2"
                    onClick={() => this.sumar()}
                >Suma</button>

            </nav>
        </>;
    }
}
//Properties initializer
export class WelcomeES7 extends Component {

    state = {
        title: "Hola Mundo",
        counter: 0
    };


    //Arrow function para obtener el this de el contexto padre ..evita hacer el bind
    updateText = (e) => {
        // console.log(this + "---------------------------------updateText()----------------------")
        this.setState({
            title: "Hello World",
        });
    }

    sumar = (e) => {
        // console.log(this + "---------------------------------sumar()----------------------")
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    render() {

        return <>
            <h1 onClick={this.updateText}>{this.state.title} ES7</h1>
            <h1>{this.state.counter}</h1>
            <nav>
                <button
                    className="btn btn-sm btn-danger float-right mx-2"
                    onClick={() => this.sumar()}
                >Suma</button>

            </nav>
        </>;
    }
}

const Boton = ({onClick}) => {
    return (<button
        className="btn btn-sm btn-secondary m-5"
        onClick={onClick}
    >Saludar Component Boton</button>)
}

export class Events extends Component {

    handleClick = (e, msg) => {
        console.log(e)
        console.log(e.nativeEvent)
        console.log(e.target)
        console.log(e.nativeEvent.target)
        console.log(msg)
    }

    render() {
        return <>
            <h1>Eventos</h1>
            <nav>
                <button
                    className="btn btn-sm btn-secondary m-5"
                    onClick={(e) => this.handleClick(e, "Mensaje x parametro desde un evento jsx")}
                >Saludar Jsx Boton</button>
                {/* //Evento Personalizado */}
                <Boton  onClick={(e) => this.handleClick(e, "Mensaje x parametro desde un evento component")}/>
            </nav>
        </>;
    }
}