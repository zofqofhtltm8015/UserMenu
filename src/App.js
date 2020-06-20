import React,{useState} from 'react';
import styled from 'styled-components';
import { GlobalStyle} from './styled.js';
import Userlists from './components/UserLists'
import './app.css';



function App(){
  return(
    <>
        <GlobalStyle />
      <Userlists>
      </Userlists>
    </>
  )
}

export default App;
