import styled from 'styled-components/native'

interface ModalTextProps{
    color: string;
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
    align-items: center;
    justify-content: space-around;
    background-color: #2c2f33;
    width: 80%;
    height: 300px;
    border-radius:10px;
    padding: 10px;
`
export const ModalTitle = styled.Text`
    font-weight: bold;
    color: ${(p: ModalTextProps)=>p.color};
    font-size: 25px;
`
export const ModalText = styled.Text`
    font-weight: bold;
    color: white;
    font-size: 20px;
`
export const ModalButton = styled.TouchableOpacity`
    padding: 10px;
    background-color: #99aab5;
    align-items: center;
    width: 80%;
    border-radius: 30px;
    
`
export const ModalValue = styled.Text`
    color: white;
    font-size: 80px;
    font-weight: bold;
`
export const ModalDesc = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`
export const ModalContent = styled.View`
    justify-content: center;
    align-items: center;
`

