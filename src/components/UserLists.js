import React,{useEffect,useState} from 'react';
import UserItem from './UserItem';
import {UserLists} from '../styled';

function Userlists(){
    
    const [isClicked, setIsClicked] = useState(()=>{})
    const index = [0,1,2,3,4];
    useEffect(() => {
       console.log("렌더링list") ;
    }, )
    
    const onClick = (index)=>{

    }

    return(
    <UserLists>

        {index.map(index=><UserItem   name="alif"isClicked={isClicked} index={index} onClick={()=>onClick(index)}></UserItem>)}
    </UserLists>
    );
}

export default Userlists;