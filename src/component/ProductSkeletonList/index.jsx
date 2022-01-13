import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import './style.scss'
function ProductSkeletonList({length = 15}) {
    return (
        <>
            {
                [...Array(length).keys()].map((item, index) => {
                    return (
                        <div className='skeleton' key={index}>
                            <Skeleton variant="rectangular"  height={180} />
                            <Skeleton height={50}/>
                            <Skeleton height={40} />
                            <Skeleton width="80%" height={30}/>
                            <div className="skeleton-footer">
                                <div className="skeleton-price">
                                    <Skeleton width="80%" height={30}/>
                                    <Skeleton width="80%" height={30} />
                                    
                                </div>
                                <Skeleton width="40%" height={60}/>
                            </div>
                        </div>
                    )
                })
            }
        </>

    );
}

export default ProductSkeletonList;