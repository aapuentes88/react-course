import React from 'react'
import { useModal } from '../../hooks/useModal'
import Modal from './Modal'
import ModalPortal from './ModalPortal'

export const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    const [isOpenModal2, openModal2, closeModal2] = useModal(false)

    const [isOpenModalPortal, openModalPortal, closeModalPortal] = useModal(false)
    return (
        <>
            <h2>Modals</h2>

            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <p>Esto es una prueba modal</p>
                <img src="https://placeimg.com/200/200/animals" alt="Animals" />
            </Modal>

            <button onClick={openModal2}>Modal 2</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Modal 2</h3>
                <p>Esto es una prueba modal 2</p>
                <img src="https://placeimg.com/200/200/nature" alt="Nature" />
            </Modal>

            <button onClick={openModalPortal}>Modal Portal</button>
            <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
                <h3>Modal Portal</h3>
                <p>
                    Esto es el contenido de un modal que carga en otro Nodo del DOM diferente 
                    a donde carga nuestra app de Reatc gracias a un React Portal
                </p>
                <img src="https://placeimg.com/200/200/tech" alt="Tech" />
            </ModalPortal>
        </>
    )
}
