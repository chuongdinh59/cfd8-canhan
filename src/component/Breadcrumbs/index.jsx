import React from 'react';
import './style.scss'
import classnames from 'classnames'
import { Link } from 'react-router-dom';
export function Breadcrumbs({ children }) {
    const len = React.Children.count(children)
    return (
        <div className='breadcrumbs'>
            <ul>
                {
                    React.Children.map(children, ((child, index) =>
                        <li className={classnames('item',{now: index === len - 1})}>{child} {index < len - 1 ? <span>/</span> : ''}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export const BreadcrumbsItem = ({ children, to = '/'}) => {
    return (
        <Link to = {to}  className="link">{children}</Link>
    )
}