import styled from 'styled-components/native'
interface ModalProps{
    visible: boolean;
}
export const ModalScreen = styled.Modal.attrs({
    animationType: 'slide',
    transparent: true,
})``
export const ModalContainer = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`
export const ModalItem = styled.View`
    background-color: #5A5D61;
    width: 80%;
    height: 300px;
    border-radius:10px;
    padding: 10px;
`
export const ModalText = styled.Text`
    color: white;
`
export const ModalButton = styled.TouchableOpacity`
    padding: 5px;
    background-color: #999;
    align-items: center;
`

