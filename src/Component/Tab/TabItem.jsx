import Product from './Product';

function TabItem({ content , tab}) {

    
    return (
        <li className="tab-item">
            {
                content.map( (item, index) => {
                    if (item.type === tab) {
                        return (
                           <Product key={index} src={item.img} price={item.price} name={item.name}/>
                       )
                    } 
                    return null;
               })
            }
        </li>
    );
}

export default TabItem;