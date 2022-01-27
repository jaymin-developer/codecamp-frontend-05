import { gql, useQuery } from '@apollo/client'
import { Hidden } from '@material-ui/core'
import { useState } from 'react'

const FETCH_BOARD = gql`
    query fetchBoards($page:Int){
        fetchBoards(page:$page){
            _id
            writer
            title
        }
    }
`

export default function PaginationNextPage() {
    const [startPage, setStartPage] = useState(1)
    const { data, refetch } = useQuery(FETCH_BOARD, {variables: {page : 1}})
// 바로 리패치, data가 바껴짐.

    const onClickPage = (event) => {
        refetch({ page: Number(event.target.id) }) // variables는 안 써도 된다.
    }

    const onClickPrevPage = () => {
        if(startPage>=1){
        setStartPage((prev) => (prev - 10))}
    }

    const onClickNextPage = () => {
        setStartPage((prev) => (prev + 10))
    }

    return(
        <div>
            <div>페이지네이션 연습!!!</div>
            {data?.fetchBoards?.map((el)=>(
                <div key={el._id}>{el.title} {el.writer}</div>
                ))}
                {/* 1~10페이지 */}
                <span onClick={onClickPrevPage}>이전 페이지</span>
                {new Array(10).fill(1).map(( _ , index) =>(
                <span key={index+startPage} onClick={onClickPage} id={String(index+startPage)}> {` ${index+startPage} `} </span>
                ))}
                <span onClick={onClickNextPage}>다음 페이지</span>
                {/* index + 11 이면 11~20페이지, index + 21 이면 21~30페이지 */}
                {/* <span onClick={onClickPage} id="1"> 1 </span>
                <span onClick={onClickPage} id="2"> 2 </span>
                <span onClick={onClickPage} id="3"> 3 </span> */}
        </div>
    )
}