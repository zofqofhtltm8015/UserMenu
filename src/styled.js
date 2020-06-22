import styled,{createGlobalStyle,css} from 'styled-components';


export const UserProfile =styled.div`
    margin: 10px 20px 10px 20px;
    
    width: 50px;
    height: 50px;

    border-radius: 100px;

    background-image: url('${props=>props.image}');
    background-size: cover;

`
export const MailList = styled.div`
height: 1000px;
background-color: #373B5F;
width: 300px;


`
export const MailContainer = styled.div`
  display: flex;
  
`

export const MailProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  color: black;
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

  export const MailContent = styled.div`
  display: flex;

  `



