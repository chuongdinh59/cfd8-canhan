import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { objectToUrlQuery, urlQueryToObject } from '../../utils/queryUrl';
import './style.scss';
function Pagination({totalPage}) {

    const {pathname} = useLocation() // /category

    const dispatch = useDispatch()

    const query = urlQueryToObject({ page: '1' })

    query.page = parseInt(query.page)

    const renderItem = () => {
        let list = []
        const currentPage = parseInt(query.page)
        let start = currentPage - 2 <= 0 ? 1 : currentPage - 2
        let end = start + 4
        for (let i = start; i <= end; i++) {
            list.push(<Link className={`${i === query.page && 'active-page'}`}
                to={`${pathname}?${objectToUrlQuery({ page: i })}`}
                onClick={(ev) => dispatch({ type: 'UPDATE_PAGE', payload: i })}
                key={i}
            >{i}</Link>)
        }
        return list
    }
    return (
        <div className="paginate">
            <span>Page: </span>
            {
                renderItem()
            }
    </div>
    );
}

export default Pagination;