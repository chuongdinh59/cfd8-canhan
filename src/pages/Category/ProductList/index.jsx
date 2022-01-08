import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../../../component/Product'
import ProductSkeletonList from '../../../component/ProductSkeletonList';
import useQuery from '../../../hooks/useQuery'
import pageService from '../../../service/pageService'
function ProductList(props) {
    const { page } = useSelector(store => store.page)
    if (localStorage.setItem('page_number', JSON.stringify(page)) !== 1) {
        localStorage.setItem('page_number', JSON.stringify(page))
    } 
    const { data, isFetching } = useQuery(() => pageService.getPage(page), [page])
    console.log(isFetching);
    return (
        <>
         <div className='product__list'>
            {
                isFetching ? <ProductSkeletonList /> : 
                data && data?.map(item =>
                    <ProductItem
                        description={item.short_description} name={item.name}
                        key={item._id} src={item.images[0].thumbnail_url} 
                        realPrice={item.real_price} sellPrice={item.price} 
                        discountRate={item.discount_rate}
                />)
            }
            </div>
        </>
    );
}

export default ProductList;