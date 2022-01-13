import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../../../component/Product'
import ProductSkeletonList from '../../../component/ProductSkeletonList';
import useQuery from '../../../hooks/useQuery'
import pageService from '../../../service/pageService'
function ProductList(props) {
    const filter = useSelector(store => store.page)
    
    const { data, isFetching } = useQuery(() => pageService.getPage(filter), [] )

   
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
                        rate={item.rating_average} discountRate={item.discount_rate}
                        id = {item._id}
                />)
            }
            </div>
        </>
    );
}

export default ProductList;