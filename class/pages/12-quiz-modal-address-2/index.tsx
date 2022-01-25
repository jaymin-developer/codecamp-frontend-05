import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

export default function ModalCustomPage () {
  const [ , setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("")
  const [zonecode, setZonecode] = useState("")

  const onCompleteDaumPostdode = (data : any) =>{
    console.log(data)
    setAddress(data.address)
    setZonecode(data.zonecode)
    setIsModalVisible(false)
  }

  return (
    <>
      <DaumPostcode
      onComplete={onCompleteDaumPostdode}
    />
      {address}
      {zonecode}
    </>
  );
};