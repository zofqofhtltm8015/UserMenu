import styled,{createGlobalStyle,css} from 'styled-components';


export const UserProfile =styled.div`
    margin: 10px 20px 10px 20px;
    
    width: 50px;
    height: 50px;

    border-radius: 100px;

    background-image: url('${props=>props.image}');
    background-size: cover;

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
  ${props=>props.isClicked  && css`
    background-color: red;
  `}
  

`;


export const UserLists = styled.div`
display: flex;
flex-direction: column;
width: 300px;
`


