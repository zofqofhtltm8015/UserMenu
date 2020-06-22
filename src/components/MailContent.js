import React, { useEffect } from 'react';
import * as S from '../styled';
function MailContent({contentValue}){
    useEffect(()=>{
        console.log("Content렌더링");
    });
    
    const {name,profile,header,content} = contentValue
    return(
        <S.MailContent>
            <S.MailProfile>
                <S.UserProfile image={profile}></S.UserProfile>
                   <S.UserName>{name}</S.UserName> 
            </S.MailProfile>
            <S.MailHeader>
                {header}
            </S.MailHeader>
            <S.MailContentValue>
                {content}
            </S.MailContentValue>
        </S.MailContent>
    );
}

export default React.memo(MailContent);