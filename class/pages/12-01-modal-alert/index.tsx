import { Modal } from 'antd';

export default function ModalAlertPage(){

    //실무에서는 필요한 부분만 주석처리, 직관적으로
    const onClickSuccessButton = () => {
        Modal.success({ content : "게시물 등록에 성공했습니다."})
    }

    const onClickFailButton = () => {
        Modal.error({ content : "비밀번호가 틀렸습니다."})
    }

    return(
        <div>
            <button onClick={onClickSuccessButton}>알림창 나타내기(성공했을 때 메시지)</button>
            <button onClick={onClickFailButton}>알림창 나타내기(실패했을 때 메시지)</button>
        </div>
    )

}