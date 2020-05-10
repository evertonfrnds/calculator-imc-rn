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
export const Button = styled.TouchableOpacity`
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
export const CardTitle = styled.Text`
    color: white;
`
export const CardValue = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 40px;
`
export const CardSlider = styled.Slider`
    width: 90%;
    height: 20px;
`;


