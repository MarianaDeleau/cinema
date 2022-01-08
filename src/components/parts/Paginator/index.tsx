import { FC } from "react"

type Props = {
    currentPage: number;
    totalPages: number;
    changePages: (newPage: number) => void;
}

const Paginator: FC<Props> = ({currentPage, totalPages, changePages}) => {
    //const Paginator: FC = () => {
    return (
        <div id="resultsPagination" className="results__pagination">
            <button className="paginationBtn" onClick={() => changePages(totalPages-(totalPages - 1))}>
                <i className="fas fa-backward"></i>
            </button>
            <button className="paginationBtn" onClick={() => changePages(currentPage-1)}>
                <i className="fas fa-step-backward"></i>
            </button>
            <button className="paginationBtn" onClick={() => changePages(currentPage+1)}>
                <i className="fas fa-step-forward"></i>
            </button>
            <button id="btnEnd" className="paginationBtn" onClick={() => changePages(totalPages)}>
                <i className="fas fa-forward"></i>
            </button>
        </div>
        )
}


export {Paginator}