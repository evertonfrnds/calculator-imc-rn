import React, {useState} from 'react';
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
  CardContainerToggle,
  CardValueText,
  GroupButton,
  Button,
} from "./src/styles";

import Icon from 'react-native-vector-icons/Ionicons';
export default function App() {
  const [sexo, setSexo] = useState<string | null>(null);
  const [altura, setAltura] = useState<number>(150);
  const [peso, setPeso] = useState<number>(60);
  const [idade, setIdade] = useState<number>(21);
  return (
    <Container>
      <StatusBar backgroundColor='#2c2f33'/>
      <Title>Calculadora IMC</Title>
      <ContainerFlex>
        <CardContainerToggle
          onPress={()=>setSexo('male')} 
          active={sexo=='male'?true:false}
        >
          <Icon name='md-male' color='#fff' size={60} style={{marginBottom: 10}}/>
          <CardLabel>
            HOMEM
          </CardLabel>
        </CardContainerToggle>
        <CardContainerToggle
          onPress={()=>setSexo('female')}
          active={sexo=='female'?true:false}
        >
          <Icon name='md-female' color='#fff' size={60} style={{marginBottom: 10}}/>
          <CardLabel>
            MULHER
          </CardLabel>
        </CardContainerToggle>
      </ContainerFlex>
      <ContainerFlex>
        <CardContainer>
          <CardLabel>
            ALTURA
          </CardLabel>
          <CardValue>
            <CardValueText>
              {altura}
            </CardValueText>
            <CardLabel>
              cm
            </CardLabel>
          </CardValue>
          <CardSlider 
            minimumValue={0}
            maximumValue={230}
            minimumTrackTintColor="#7289da"
            maximumTrackTintColor="#000000"
            thumbTintColor='#fff'
            step={1}
            value={altura}
            onValueChange={(value)=>setAltura(value)}/>
        </CardContainer>
      </ContainerFlex>
      <ContainerFlex>
        <CardContainer>
          <CardLabel>
            PESO
          </CardLabel>
          <CardValueText>
            {peso}
          </CardValueText>
          <GroupButton>
            <Button
              onPress={()=>setPeso(peso-1)}
            >
              <Icon name='md-remove' color='white' size={25}/>
            </Button>
            <Button
              onPress={()=>setPeso(peso+1)}
            >
              <Icon name='md-add' color='white' size={25}/>
            </Button>
          </GroupButton>
        </CardContainer>
        <CardContainer>
          <CardLabel>
            IDADE
          </CardLabel>
          <CardValueText>
            {idade}
          </CardValueText>
          <GroupButton>
            <Button
              onPress={()=>setIdade(idade-1)}
            >
              <Icon name='md-remove' color='white' size={25}/>
            </Button>
            <Button
              onPress={()=>setIdade(idade+1)}
            >
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