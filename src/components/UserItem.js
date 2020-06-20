import React,{useEffect,useState} from 'react';
import {UserProfile,UserName, UserItem} from '../styled';

function Useritem({nameProfileContent,index,setSelectIndex,isActive}){
    const {
        profile,
        name} = nameProfileContent;


    
               
    useEffect(() => {
        console.log('렌더링');
    })

    const onClick=()=>{
        setSelectIndex(index);

    }

    return( 
   <>
        <UserItem  onClick={onClick} isActive={isActive} >
            <UserProfile image={profile}></UserProfile>
            <UserName>{name}</UserName>
        </UserItem>
    </>
    );
}

export default React.memo(Useritem);