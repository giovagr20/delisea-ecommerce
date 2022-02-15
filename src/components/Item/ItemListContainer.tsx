import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { ItemProducts } from '../../constants/products_items';
import { Products } from '../../models/products';
import { customFetch } from '../../utils/customFetch';

/**                 <ItemCount stock="5" initial="1" />
 */

export const ItemListContainer = () => {

    const [items, setItems] = useState<Array<Products>>();

    useEffect(() => {
        customFetch(2000, ItemProducts.filter((item: Products) => {
            if (item.id > 0) return item;
        })).then((result: Array<Products>) => setItems(result)).catch(err => console.log(err));
    }, [items]);

    return (
        <>
            <div className='container p-2'>
                <div className="display-6 text-center">
                    <strong>Agrega tus productos!</strong></div>
                <hr />
                <ItemList {...items as Array<Products>} />
            </div>
        </>
    )
}