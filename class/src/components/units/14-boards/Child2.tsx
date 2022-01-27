export default function Child2(props) {
    const onClickCountUp = () => {
        props.setCount((prev) => prev + 1)
    }

    return(
        <>
            <div>자식2 카운트: {props.count} </div>
            <button onClick={onClickCountUp}>카운트 올리기</button>
        </>
    )

}