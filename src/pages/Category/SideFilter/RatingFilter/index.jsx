import React from 'react';
import Rate from '../../../../component/Rate';
function RatingFilter(props) {
    return (
        <div className="rate__filter filter">
            <h4 className="filter__name">
                    Rating
            </h4>
            <div className="filter__content">
                <label className="filter__rate">
                <input type="checkbox" />
                    <Rate index={5}/>
                </label>
                <label className="filter__rate">
                <input type="checkbox" />
                    <Rate index={4}/>

                </label>
                <label className="filter__rate">
                <input type="checkbox" />
                    <Rate index={3}/>

                </label>
                <label className="filter__rate">
                <input type="checkbox" />
                    <Rate index={2}/>
                </label>
                <label className="filter__rate">
                <input type="checkbox" />
                    <Rate index={1}/>
                </label>
            </div>
        </div>
    );
}

export default RatingFilter;