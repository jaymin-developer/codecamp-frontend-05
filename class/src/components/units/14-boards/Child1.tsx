export default function Child1(props) {
    const onClickCountUp = () => {
        setCount((prev) => prev + 1)
    }


    return(
        <>
            <div>자식1 카운트: {props.count} </div>
            <button onClick={props.onClickCountUp}>카운트 올리기</button>
        </>
    )

}