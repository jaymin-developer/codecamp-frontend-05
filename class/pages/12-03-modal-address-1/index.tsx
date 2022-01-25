import { useState } from 'react';
import { Modal, Button } from 'antd';
import DaumPostcode from 'react-daum-postcode';

export default function ModalCustomPage () {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("")
  const [zonecode, setZonecode] = useState("")

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onCompleteDaumPostdode = (data : any) =>{
    console.log(data)
    setAddress(data.address)
    setZonecode(data.zonecode)
    setIsModalVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {/* primary는 안트 디자인 자체 타입 */}
        우편번호 검색
      </Button>
      <Modal title="우편번호 검색" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <DaumPostcode
      onComplete={onCompleteDaumPostdode}
    />
      </Modal>
      {address}
      {zonecode}
    </>
  );
};