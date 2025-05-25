import style from "./paginationStyles.module.scss"
import { PaginationType } from "@/app/types/types";
import SvgArrowBack from "../svg/SvgArrowBack";
import SvgArrowForward from "../svg/SvgArrowForward";

const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationType) => {
    if (totalPages <= 0) return null;

    return (
        <div className={style.pagination}>
            <button
                className={style.paginationBack}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}>
                <SvgArrowBack/>Prev
            </button>
            <div className={style.paginationPages}>
                {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={currentPage === index + 1 ? style.active : ''}
                    style={{ cursor: 'pointer' }}>
                    {index + 1}
                </button>
            ))}
            </div>
            <button
                className={style.paginationForward}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}>
                Next<SvgArrowForward/>
            </button>
        </div>
    );
}

export default Pagination