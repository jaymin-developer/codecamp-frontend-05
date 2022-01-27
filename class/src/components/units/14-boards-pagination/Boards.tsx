
export default function Board(props){


    return(
        <div>
        {props.data?.fetchBoards?.map((el)=>(
            <div key={el._id}>{el.title} {el.writer}</div>
            ))}
        </div>
    )

}