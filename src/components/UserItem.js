import React,{useEffect,useState} from 'react';
import {UserProfile,UserName, UserItem} from '../styled';
import {mailList} from '../context/test.json';

function Useritem({index,onClick,isClicked}){
    const {
        profile,
        name} = mailList[index];


    
               
    useEffect(() => {
        console.log('렌더링');
    })


    return( 
        <UserItem  onClick={onClick} isClicked={isClicked} >
            <UserProfile image={profile}></UserProfile>
            <UserName>{name}</UserName>
        </UserItem>
    );
}

export default React.memo(Useritem);