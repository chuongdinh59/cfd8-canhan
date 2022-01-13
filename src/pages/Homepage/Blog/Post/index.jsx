import React from 'react';
import classnames from 'classnames'
import './style.scss'
import Tag from '../../../../component/Tag';
function Post(
    { children , topic , author = "Author", time  = "17. 6. 2020", avatar = null, size }) {
    
    return (
        <div className={classnames('post', `post-${size}`)}>
            

            <div className="post__img">
                <img src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg" alt="" />
            </div>
                {topic && <Tag  tagname={topic} bg='bright'/>}
            <div className="post__desc">
                <h4 className='post__title'>{children}</h4>
                <div className="post__author">
                    <div className="post__info">
                        {avatar && <img src={avatar} alt='avatar'/> }
                        <p>{author}</p>
                    </div>
                    <div className="post__submit">
                        <p>{time}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;