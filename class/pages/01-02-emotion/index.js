import {Wrapper, MyTitle, Id, Pw} from '../../styles/emotion'

export default function EmotionPage() {

    return (
        <Wrapper>
            <MyTitle>안녕하세요 이모션 페이지입니다.</MyTitle>
            <Id>아이디<input type="text"/></Id> 
            <Pw>비밀번호<input type="password"/></Pw> 
        </Wrapper>
    )
}