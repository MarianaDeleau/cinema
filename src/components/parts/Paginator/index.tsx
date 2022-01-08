import { FC,  } from "react"

type Props = {
    currentPage: number;
    totalPages: string;
    changePages: (newPage: number) => void;
}

const Paginator: FC<Props> = ({currentPage, totalPages, changePages}) => {
    

    return (
        <div id="resultsPagination" className="results__pagination">
            <button className="paginationBtn" onClick={() => changePages(Number(totalPages)-(Number(totalPages) - 1))}>
                <i className="fas fa-backward"></i>
            </button>
            <button className="paginationBtn" onClick={() => changePages(currentPage-1)}>
                <i className="fas fa-step-backward"></i>
            </button>
            <button className="paginationBtn" onClick={() => changePages(currentPage+1)}>
                <i className="fas fa-step-forward"></i>
            </button>
            <button id="btnEnd" className="paginationBtn" onClick={() => changePages(Number(totalPages))}>
                <i className="fas fa-forward"></i>
            </button>
        </div>
        )
}


export {Paginator}