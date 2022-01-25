import { useState } from 'react';
import { Modal, Button } from 'antd';
import DaumPostcode from 'react-daum-postcode';

export default function ModalCustomPage () {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("")
  const [zonecode, setZonecode] = useState("")

  // const showModal = () => {
  //   setIsModalVisible((prev) => (!prev));
  // };

  // const handleOk = () => {
  //   setIsModalVisible(prev => !prev);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(prev => !prev);
  // };

  // 토글
  const onToggleModal = () => {
    setIsModalVisible(prev => !prev);
  };

  const onCompleteDaumPostdode = (data : any) =>{
    console.log(data)
    setAddress(data.address)
    setZonecode(data.zonecode)
    onToggleModal()
  }

  return (
    <>
      <Button type="primary" onClick={onToggleModal}>
        {/* primary는 안트 디자인 자체 타입 */}
        우편번호 검색
      </Button>
      {isModalVisible && ( <Modal title="우편번호 검색" visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
      <DaumPostcode
      onComplete={onCompleteDaumPostdode}
    />
      </Modal>)}
      {address}
      {zonecode}
    </>
  );
};