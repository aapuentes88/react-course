import React, { Component } from 'react'

class Reloj extends Component {

    //ES6 function constructor
    constructor(props) {
        super(props);
    }

    componentWillUnmount(){
        // console.log(3, "El componente ha sido removido del DOM")
    }
    
    render(){
        return <h3>{this.props.fecha}</h3>
    }
}

export default class CicloVida extends Component {

    //ES6 function constructor
    constructor(props) {
        super(props);

        this.state = {
            fecha: new Date().toLocaleTimeString(),
            visible: false
        };

        this.temporizador = null

        this.iniciar = this.iniciar.bind(this)
        this.detener = this.detener.bind(this)

        // console.log(0, "El componente se inicializa, aun no esta en el DOM")

    }

    //ES7 Properties Initializer -- Arrow Functions
    tictac = () => {
      this.temporizador = setInterval(() => {
        this.setState({fecha: new Date().toLocaleTimeString()})
      }, 1000)
    }

    iniciar(e) {
        this.tictac()
        this.setState({visible:true})
    }

    detener(e) {
        this.setState({visible:false})
        clearInterval(this.temporizador)
    }


    componentDidMount(prevProps, prevState){
        // console.log(1, "El componente ya se encuentra en el DOM")
    }

    componentDidUpdate(){
        // console.log(2, "El estadp o props del componente han cambiado")
    }

    render() {
        // console.log(4, "El componente se dibuja o redibuja en el DOM")
        return (
            <>
                <h2>Ciclo de vida del componente</h2>
                {this.state.visible && <Reloj fecha={this.state.fecha}/>  }                   
                <button
                    className="btn btn-sm btn-secondary "
                    onClick={(e) => this.iniciar(e)}
                >Iniciar</button>
                <button
                    className="btn btn-sm btn-secondary "
                    onClick={(e) => this.detener(e)}
                >Detener</button>
            </>
        )
    }

}
