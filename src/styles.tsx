import styled from 'styled-components/native';

//CONTAINER
export const Container = styled.View`
    background-color: #2c2f33;
    flex: 1;
    align-items: center;
    padding-top: 10px;
`;

export const ContainerFlex = styled.View`
    flex-direction: row;
    flex: 1;
    margin: 0 5px;
    padding: 5px;
`;
export const Title = styled.Text`
    font-weight: bold;
    margin: 10px;
    color: white;
    font-size: 18px;
`;
export const ButtonSubmit = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    padding: 15px;
    background-color: #7289da;
    margin-top: 10px;
`
export const TextButton = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 18px;
`
//CARD
export const CardContainer = styled.View`
    flex: 1;
    background-color: #474A53;
    margin: 10px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;
export const CardLabel = styled.Text`
    color: white;
`

export const CardValue = styled.View`
    padding: 0;
    margin: 0;
    flex-direction: row;
    align-items: baseline;
`;

export const CardValueText = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 38px;
`
export const CardSlider = styled.Slider`
    width: 90%;
    height: 30px;
`;
export const GroupButton = styled.View`
    flex-direction: row;
`;
export const Button = styled.TouchableOpacity.attrs({
    activeOpacity: 0.4,
})`
    background-color: #686574;
    padding: 10px;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin: 5px;
`;

