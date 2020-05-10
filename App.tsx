import React from 'react';
import {StatusBar, Slider} from 'react-native'
import { 
  Container,
  Title, 
  CardContainer, 
  ContainerFlex, 
  Button, 
  TextButton,
  CardTitle,
  CardValue,
  CardSlider
} from "./src/styles";

import Icon from 'react-native-vector-icons/Ionicons';
export default function App() {
  return (
    <Container>
      <StatusBar backgroundColor='#2c2f33'/>
      <Title>Calculadora IMC</Title>
      <ContainerFlex>
        <CardContainer>
          <Icon name='md-male' color='#fff' size={60} style={{marginBottom: 10}}/>
          <CardTitle>
            HOMEM
          </CardTitle>
        </CardContainer>
        <CardContainer>
          <Icon name='md-female' color='#fff' size={60} style={{marginBottom: 10}}/>
          <CardTitle>
            MULHER
          </CardTitle>
        </CardContainer>
      </ContainerFlex>
      <ContainerFlex>
        <CardContainer>
          <CardTitle>
            ALTURA
          </CardTitle>
          <CardValue>
            164
          </CardValue>
          <CardSlider 
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#7289da"
            maximumTrackTintColor="#000000"
            thumbTintColor='#fff'/>
        </CardContainer>
      </ContainerFlex>
      <ContainerFlex>
        <CardContainer>

        </CardContainer>
        <CardContainer>
          
        </CardContainer>
      </ContainerFlex>
      <Button>
        <TextButton>Calcular</TextButton>
      </Button>
    </Container>
  );
}