import { MovieList } from "../types/interface";

type ListProps = {
    listProps: MovieList[] | undefined
}
const SquareList = ({listProps} : ListProps)  => {
    return (
        <ul>
            {listProps?.map(({title},idx)=>{
                return <li key={idx}>{title}</li>
            })}
        </ul>
    )
}

export default SquareList;