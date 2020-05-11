import React from 'react'
import{
    ModalScreen,
    ModalContainer, 
    ModalText,
    ModalItem,
    ModalButton
}from './sytle';
interface ModalProps{
    visible: boolean;
    handleModalVisible(): void;
    imc: number | null;
}
const Modal: React.FC<ModalProps> = (props) => {
    function handleClick(){
        props.handleModalVisible();
    }
    return(
    <ModalScreen 
        visible={props.visible}
        onRequestClose={handleClick}
    >
        <ModalContainer>
            <ModalItem>
                <ModalText>
                    {props.imc}
                </ModalText>
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