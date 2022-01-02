import React from 'react';
import Tag from '../../../component/Tag'
import './style.scss'
function Filter({type = 'default'}) {
    return (
        <div className='screen'>
            <div className="screen__main">
                {
                    type === 'default' && 
                    <>
                            <div className="screen__content">
                            <input type="checkbox" />
                            <span >Filtre</span>
                            </div>
                            <Tag tagname='Nbm' bg='store' />
                    </>
                }
                {
                    type === 'radio' &&
                    <div className="screen__content">
                        <div className="screen__item"> <input type="radio" name='choosen' /> <span>Filtre text</span></div>
                        <div className="screen__item"> <input type="radio" name='choosen' /> <span>Filtre text</span></div>
                    </div>
                }
                {
                    type === 'select' &&
                    <div className="screen__content">
                            <div className="screen__filter">
                                <input type="checkbox" />
                                <span>Filtre</span>
                                <Tag tagname='12' bg='store' />
                            </div>
                            <div className="screen__select">
                                <select name="" id="" placeholder='select' >
                                    <option >select</option>
                                    <option value="">abc</option>
                                    <option value="">abc</option>
                                    <option value="">abc</option>
                                </select>
                            </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Filter; 