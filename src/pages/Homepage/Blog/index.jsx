import React from 'react';
import Button from '../../../component/Button/Button';
import { Arrow } from '../../../component/Icon';
import Post from './Post';
import './style.scss';
function Blog(props) {
    return (
        <section className='blog'>
            <div className="container">
                <div className="blog__heading">
                        <h4 className="headline__title">
                            Read our Blog posts
                    </h4>    
                    <div className="blog__btn">
                        <Button content={"Go to Blog"} size='small'type='icon-right'icon={<Arrow /> } bgcolor='store'/>
                    </div>
                </div>
                <div className="blog__main">
                    <div className="blog__item">
                        <Post topic = 'Dinner tips' size={"large"} avatar={'https://camhung.net/wp-content/uploads/2021/05/Gordon-Ramsay-MN2S.png'}>
                            Our chef tips for a great and tasty dinner ready in 20 minutes
                        </Post>    
                    </div>
                    <div className="blog__item">
                        <Post topic= "Vegetable" size={"medium"} >
                        Which vegetable your family will love and want’s eat each day
                        </Post>    
                    </div>
                    <div className="blog__item">
                        <Post size={"small"} >
                        Salat is kinda good start to your morning routines
                        </Post>    
                        <Post size={"small"} >
                        Our chef tips for a great and healthy breakfast
                        </Post>    
                        <Post size={"small"} >
                        Prepare a simple and delicious breads
                        </Post>    
                       
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;