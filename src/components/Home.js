import React from 'react'
import { Button } from './styles/Button.styled'
import { ContainerServicios, Grid,Wrapper,TituloServicios, ButtonServicios, DescriptionServicios} from './styles/Container.styled'
import {Logo} from './styles/Navbar.styled'

export default function Home ()  {
  return (
    <><TituloServicios>
            SERVICIOS DESTACADOS
        </TituloServicios>
        
        <Grid>

          <Wrapper>
              <ContainerServicios>
                  <Logo src="./images/icon-citas.png" alt="my image" />
                  ONCOLOGIA
                  <DescriptionServicios>medicina que estudia el cáncer.</DescriptionServicios>
                  <ButtonServicios>Ver mas</ButtonServicios>
              </ContainerServicios>
              <ContainerServicios>
                  <Logo src="./images/icon-citas.png" alt="my image" />
                  PEDIATRIA
                  <DescriptionServicios>medicina que involucra la atención médica de bebés</DescriptionServicios>
                  <Button>Ver mas</Button>
              </ContainerServicios>
              <ContainerServicios>
                  <Logo src="./images/icon-citas.png" alt="my image" />
                  PSICOLOGIA
                  <p>Ciencia o estudio de la mente y de la conducta en personas.</p>
                  <ButtonServicios>Ver mas</ButtonServicios>
              </ContainerServicios>
              <ContainerServicios>
                  <Logo src="./images/icon-citas.png" alt="my image" />
                  ODONTOLOGIA
                  <p>Estudio de los dientes y del tratamiento de sus dolencias.</p>
                  <ButtonServicios>Ver mas</ButtonServicios>
              </ContainerServicios>

          </Wrapper>

      </Grid></>
  )
}

