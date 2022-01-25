import { ChangeEvent, useState } from 'react';
import { Modal, Button } from 'antd';

export default function ModalCustomPage () {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ _ , setPassword] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };



  const onChangePassword = (event : ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
// jsx가 return 되게 하려면 React import 해야하지만 next.js는 알아서
  return (
    <>
      <Button type="primary" onClick={showModal}>
        {/* primary는 안트 디자인 자체 타입 */}
        Open Modal
      </Button>
      <Modal title="확인 메시지" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        비밀번호 입력: <input type="password" onChange={onChangePassword}></input>
      </Modal>
    </>
  );
};