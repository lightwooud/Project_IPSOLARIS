import React from 'react'
import { StyledHeader, Nav, Logo, Image, Hola} from './styles/Navbar.styled'
import { Button, ContainerBotones } from './styles/Button.styled'
import {Container} from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import Slider from "react-styled-carousel";


export default function Header()  {
  return (
    <StyledHeader>
        <Container>
            <Nav>
                <Logo src='../images/IPS.svg' alt='' />
                <Button>INICIO</Button>
                <Button>AFILIADOS</Button>
                <Button>EMPLEADORES</Button>
                <Button>PRESTADORES</Button>
                <Button>PRENSA</Button>
            </Nav>
        
            <Slider cardsToShow={1} pauseOnMouseOver={false} infinite={true}>
                <Hola ><Image src="./images/1.jpg" alt="doggo" /> 
                            </Hola>
                <Hola><Image src="./images/2.jpg" alt="doggo" />
                                  </Hola>
                <Hola><Image src="./images/3.jpg" alt="doggo" />
                                  </Hola>
                <Hola><Image src="./images/4.jpg" alt="doggo" />
                                </Hola>
               
            </Slider>
                <Flex>
                
                    <ContainerBotones  >
                        <Logo src="./images/icon-citas.png" alt="my image"/>
                       CITAS MEDICAS
                    </ContainerBotones>
                    <ContainerBotones >
                        <Logo src="./images/icon-ordenes.png" alt="my image"/>
                        ORDENES MEDICAS 
                    </ContainerBotones>
                    
                    <ContainerBotones >
                        <Logo src="./images/icon-resultados.png" alt="my image"/>
                       CITAS MEDICAS
                    </ContainerBotones>
                    <ContainerBotones>
                        <Logo src="./images/icon-solicitud.png" alt="my image"/>
                        ORDENES MEDICAS 
                    </ContainerBotones>
                

                <Image src='./images/illustration-mockups.svg' alt='' />
                </Flex>  
        </Container>
    </StyledHeader> 
  )
}

