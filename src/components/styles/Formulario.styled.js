import styled from 'styled-components'

export const StyledFormulario = styled.div`
  body{
        margin: 0;
        height: 100%;
        background: linear-gradient(45deg, #BB1881, #F88B50)
    }

    form {
     width: 600px;
     border: goldenrod solid 3px;
     background: white;
     margin: auto;
     padding: 10px 20px;
     box-sizing: border-box;
     margin-top: 20px;
     margin-bottom: 20px;
     border-radius: 7px;
      }  

      h1{
          text-align: center;
      }

      input, textarea{
       width: 100%;
    }

    
    @media (max-width: 655px) {
        form {
          width: 100%;
      
      }}

      @media (max-width: 502px) {
        .uni1 {
      padding-top: 17%;
      padding-bottom: 18%;
      }

    }

    
    @media (max-width: 350px){
      .check{
        display: flex!important;
        flex-direction: column!important;
        align-items: center!important;
              }

      .studiescompletes{
        padding-left: 40px;
        padding-bottom: 30px!important
              }

      .uni1 {
        padding-top: 0%;
        padding-bottom: 0%;
                }        
    }

`

export const BtnEnviar = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  align-self: center;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
 

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
    
`
