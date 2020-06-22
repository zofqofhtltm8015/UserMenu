import styled,{createGlobalStyle,css} from 'styled-components';


export const UserProfile =styled.div`
    margin: 10px 20px 10px 20px;
    
    width: 50px;
    height: 50px;

    border-radius: 30px;

    background-image: url('${props=>props.image}');
    background-size: cover;
`
export const MailContainer = styled.div`
  display: flex;
  
` 

export const GlobalStyle = createGlobalStyle`
body{
  padding: 0px;
  margin: 0px;
}

`

export const UserName = styled.div`
    font-size: 15px;
    
`

export const UserItem = styled.div`

  background-color: #373B5F;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  
  width: 300px;
    ${props=>props.isActive  && css`
      background-color: red;
    `}
  `;

  

export const MailProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  color: black;
  width: 300px;
`


export const MailList = styled.div`
height: 1000px;
background-color: #373B5F;
width: 300px;
`

  export const MailContent = styled.div`

    margin: 5% 10% 0% 5%;
  `

  export const MailHeader = styled.div`
      margin: 3% 5% 5% 10%;
      font-size: 35px;
      font-weight: bold;
  
  `;

  export const MailContentValue = styled.div`
  margin: 3% 5% 5% 10%;

  
  `



