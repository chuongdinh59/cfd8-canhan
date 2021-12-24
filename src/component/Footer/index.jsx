import React from 'react';
import './style.scss'
import Tag from '../Tag'
function Footer(props) {
    const tagList = ['Beans', 'Carrots', 'Apples', 'Garlic', 'Mushrooms', 'Tomatoes', 'Chilli peppers', 'Broccoli', 'Watermelons', 'Oranges', 'Bananas', 'Grapes', 'Cherries', 'Meat', 'Seo tag', 'Fish', 'Seo tag', 'Fresh food', 'Lemons']
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__main">
                    <div className="footer__col">
                        <h5 className="footer__heading">
                            Get in touch
                        </h5>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Press Releases</p>
                        <p>Blog</p>
                    </div>
                    <div className="footer__col">
                        <h5 className="footer__heading">
                        Connections
                        </h5>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p>Youtube</p>
                        <p>LinkedIn</p>
                    </div>
                    <div className="footer__col">
                        <h5 className="footer__heading">
                            Earnings
                        </h5>
                        <p>Become an Affiliate</p>
                        <p>Advertise your product</p>
                        <p>Sell on Market</p>
                    </div>
                    <div className="footer__col">
                        <h5 className="footer__heading">
                        Account
                        </h5>
                        <p>Your account</p>
                        <p>Returns Centre</p>
                        <p>100 % purchase protection</p>
                        <p>Chat with us</p>
                        <p>Help</p>
                    </div>
                </div>
                <div className="product__tag">
                    <h5 className="footer__heading">
                        Product tags
                    </h5>
                    <div className="tag__list">
                        {
                            tagList.map(item => {
                                return (
                                    <Tag tagname={item} bg='store' />
                                )
                            })
                        }
                    </div>
                </div>

                <div className="license">
                Copyright © 2020 petrbilek.com
                </div>
            </div>
        </footer>
    );
}

export default Footer;