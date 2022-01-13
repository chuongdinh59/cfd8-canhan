import React from 'react';
import { Breadcrumbs, BreadcrumbsItem } from '../../component/Breadcrumbs';
import { Gird, Section } from '../../component/Icon';
import More from '../../component/More';
import Tag from '../../component/Tag';
import Filter from './Filter';
import ProductList from './ProductList';
import SideFilter from './SideFilter';
import './style.scss';
function CategoryPage(props) {

    console.log('categorypage');
    
    return (
        <>
        <div className="category">
                <div className="container">
                <Breadcrumbs>
                            <BreadcrumbsItem>Homepage</BreadcrumbsItem>
                            <BreadcrumbsItem>Fruit and vegetables</BreadcrumbsItem>
                </Breadcrumbs>
                    <div className="category__header">
                        <div className="category__title">
                            <h3>Fruit and vegetables</h3>
                            <div className="category__express">
                                <div className="express__option">
                                    <Gird />
                                    <span>Grid view</span>
                                </div>
                                <div className="express__option">
                                    <Section />
                                    <span>List view</span>
                                </div>
                                <div className="quantily">
                                    <Tag tagname='117' />
                                    <span>Products</span>
                                </div>
                            </div>
                        </div>
                        <div className="category__screen">
                            <Filter type='radio' />
                            <Filter type='default' />
                            <Filter type='default' />
                            <Filter type='select' />
                        </div>
                        <div className="category__tags">
                            <span>
                            Applied filtres:
                            </span>
                            <Tag tagname='Selected Filtre' icon = {true}  color={'#C8DEB3'}/>
                            <Tag tagname='Selected Filtre' icon = {true}  color={'#C8DEB3'}/>
                        </div>

                    </div>
                    <div className='category__container'>
                        <section className="criteria">
                            <SideFilter />
                        </section>
                        <section className="products">
                            <ProductList />
                        </section>
                    </div>
                    <More />
           </div>
        </div>
           
        </>
    );
}

export default CategoryPage;