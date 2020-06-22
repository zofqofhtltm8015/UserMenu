import React, { useEffect } from 'react';
import * as S from '../styled';
function MailContent({Content}){
    useEffect(()=>{
        console.log("Content렌더링");
    })
    const {name,profile,header,content} = Content
    return(
        <S.MailContent>
            <S.MailProfile>
                <S.UserProfile image={profile}></S.UserProfile>
                   <S.UserName>{name}</S.UserName> 
            </S.MailProfile>
            {header}
            {content}
        </S.MailContent>
    );
}

export default React.memo(MailContent);