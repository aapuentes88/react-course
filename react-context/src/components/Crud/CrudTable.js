import React, { useContext } from 'react'
import CrudContext from './CrudContext'
import CrudTableRow from './CrudTableRow'

const CrudTable = () => {

    const { db : data } = useContext(CrudContext)

    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelacion</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                {
                        data.length === 0 ? 
                        (<tr><td colSpan="">Sin datos</td></tr>) : 
                        (data.map(element => <CrudTableRow key={element.id} data={element}/>))
                    }
                </tbody>
            </table>


        </div>
    )
}

export default CrudTable