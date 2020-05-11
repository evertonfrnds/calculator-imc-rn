import React, {useEffect, useState} from 'react'
import{
    ModalScreen,
    ModalContainer, 
    ModalTitle,
    ModalItem,
    ModalButton,
    ModalText,
    ModalValue,
    ModalDesc,
    ModalContent
}from './sytle';

interface ModalProps{
    visible: boolean;
    handleModalVisible(): void;
    imc: number;
}
const Modal: React.FC<ModalProps> = (props) => {

    function handleClick(){
        props.handleModalVisible();
    }

    function setMessage(){
        if (props.imc >= 25) {
            return {
                message : 'Você está acima do seu peso normal. Exercite-se mais.',
                title : 'OBESIDADE!',
                color: '#ea4335'
            }
        } else if (props.imc >= 18) {
            return {
                message : 'Você está no seu peso normal. Bom trabalho!',
                title : 'NORMAL!',
                color: '#34a853'
            }
        } else {
            return {
                message : 'Você está abaixo do seu peso normal. Você deve comer mais.',
                title : 'ABAIXO DO PESO!',
                color: '#fbbc05'
            }
        }      
    }

    return(
    <ModalScreen 
        visible={props.visible}
        onRequestClose={handleClick}
    >
        <ModalContainer>
            <ModalItem>
                <ModalContent>
                    <ModalTitle color={setMessage().color}>
                        {setMessage().title}
                    </ModalTitle>
                    <ModalValue>
                        {props.imc}
                    </ModalValue>
                    <ModalDesc>
                        {setMessage().message}
                    </ModalDesc>
                </ModalContent>
                <ModalButton
                    onPress={handleClick}
                >
                    <ModalText>
                        Voltar
                    </ModalText>
                </ModalButton>
            </ModalItem>
        </ModalContainer>
    </ModalScreen>)
}
export default Modal