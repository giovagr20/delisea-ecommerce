import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { ItemCount } from './ItemCount';
import { customFetch } from '../../utils/customFetch';
import { ItemProducts } from '../../constants/products_items';

export const ItemListContainer = () => {

    let [items, setItems] = useState<string[]>([]);

    useEffect(() => {
        customFetch(2000, ItemProducts.filter(item => {
            return item.id > 0
        }))
            .then((result: any) => setItems(result))
            .catch(err => console.log(err))
    }, [items]);

    return (
        <>
            <div className='container p-2'>
                <ItemCount stock="5" initial="1" /> 
                <hr />
                <ItemList items={items} />
            </div>
        </>
    )
}