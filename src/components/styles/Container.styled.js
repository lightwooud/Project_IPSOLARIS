import styled from 'styled-components'

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  animation: 20s;
`
export const Grid = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  margin: 0%;
  
  
`

export const Wrapper = styled.div`
  display: flex;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 2px;
  

`

export const ContainerServicios = styled.div`
  border-radius: 50px;
  
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  font-weight: 700;
  padding: 10px 40px;
  margin: 30px;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
 

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  } 

`
export const TituloServicios = styled.h1`
  text-align: center;
  font-size: 28px;

`
export const DescriptionServicios = styled.p`
  text-align: center;
  

`

export const ButtonServicios = styled.button`
  position: absolute; 
  

  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
 
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
 

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }



`
