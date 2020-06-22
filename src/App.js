import React,{useState} from 'react';
import styled from 'styled-components';
import { GlobalStyle,MailList,MailContainer} from './styled.js';
import UserItem from './components/UserItem'
import './app.css';
import {mailList}  from './context/test.json';
import MailContent from './components/MailContent'



function App(){
  const [selectIndex,setSelectIndex] = useState(0);
  return(
    <>
        <GlobalStyle />
    <MailContainer>
      <MailList>
        {mailList.map((mailContent,index)=>
            <UserItem 
              nameProfileContent = {mailContent}
              index={index}
              key={index}
              setSelectIndex={setSelectIndex}
              isActive={index===selectIndex}
            />
        )}
      </MailList>
      <MailContent contentValue = {mailList[selectIndex]}>
     </MailContent>
    </MailContainer>
    </>
  )
}

export default App;
