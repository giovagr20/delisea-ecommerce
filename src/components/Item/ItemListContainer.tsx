import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { ItemProducts } from '../../constants/products_items';
import { Products } from '../../models/products';
import { customFetch } from '../../utils/customFetch';
import { useParams } from 'react-router';

export const ItemListContainer = () => {

    const { idCategory } = useParams<{ idCategory: string }>();

    const numberIdCategory: number = parseInt(idCategory as string);

    return (
        <>
            <div className='container p-2'>
                <div className="display-6 text-center">
                    <strong>Agrega tus productos!</strong></div>
                <hr />
                <ItemList {...numberIdCategory} />
            </div>
        </>
    )
}