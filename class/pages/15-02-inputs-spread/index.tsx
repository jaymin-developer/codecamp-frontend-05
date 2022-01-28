// 리팩토링

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [qqq] = useMutation(CREATE_BOARD);

  const zzz = async () => {
    const result = await qqq({
      variables: {
        ...inputs,
      },
    });
  };

  const onChangeInputs = (event) => {
    // setMyWriter(event.target.value);
    setInputs({
      ...inputs,
      // writer: inputs.writer,
      writer: event.target.value,
      // title: inputs.title,
      // contents: inputs.contents,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div>
      <div>스프레드 연산자 연습</div>
      <input type="text" id="writer" onChange={onChangeInputs} />
      <input type="text" id="title" onChange={onChangeInputs} />
      <input type="text" id="contents" onChange={onChangeInputs} />
    </div>
  );
}
