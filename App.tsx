import React from 'react';
import {StatusBar} from 'react-native'
import { 
  Container,
  Title, 
  CardContainer, 
  ContainerFlex, 
  ButtonSubmit, 
  TextButton,
  CardLabel,
  CardValue,
  CardSlider,
  CardValueText,
  GroupButton,
  Button
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
          <CardLabel>
            HOMEM
          </CardLabel>
        </CardContainer>
        <CardContainer>
          <Icon name='md-female' color='#fff' size={60} style={{marginBottom: 10}}/>
          <CardLabel>
            MULHER
          </CardLabel>
        </CardContainer>
      </ContainerFlex>
      <ContainerFlex>
        <CardContainer>
          <CardLabel>
            ALTURA
          </CardLabel>
          <CardValue>
            <CardValueText>
              180
            </CardValueText>
            <CardLabel>
              cm
            </CardLabel>
          </CardValue>
          <CardSlider 
            minimumValue={0}
            maximumValue={250}
            minimumTrackTintColor="#7289da"
            maximumTrackTintColor="#000000"
            thumbTintColor='#fff'
            value={50}/>
        </CardContainer>
      </ContainerFlex>
      <ContainerFlex>
        <CardContainer>
          <CardLabel>
            PESO
          </CardLabel>
          <CardValueText>
            83
          </CardValueText>
          <GroupButton>
            <Button>
              <Icon name='md-remove' color='white' size={25}/>
            </Button>
            <Button>
              <Icon name='md-add' color='white' size={25}/>
            </Button>
          </GroupButton>
        </CardContainer>
        <CardContainer>
          <CardLabel>
            IDADE
          </CardLabel>
          <CardValueText>
            21
          </CardValueText>
          <GroupButton>
            <Button>
              <Icon name='md-remove' color='white' size={25}/>
            </Button>
            <Button>
              <Icon name='md-add' color='white' size={25}/>
            </Button>
          </GroupButton>
        </CardContainer>
      </ContainerFlex>
      <ButtonSubmit>
        <TextButton>Calcular</TextButton>
      </ButtonSubmit>
    </Container>
  );
}