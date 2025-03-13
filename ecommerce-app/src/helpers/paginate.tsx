import ReactPaginate from "react-paginate";

const Paginate = (props: { getAllUsers: (arg0: number) => void; totalPages: number; }) => {
    const handlePageClick = (event: { selected: string | number; }) => {
        props.getAllUsers(+event.selected + 1);
    };
    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={props.totalPages}
                previousLabel="< previos"
                renderOnZeroPageCount={null}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />
        </div>
    );
};
export default Paginate;