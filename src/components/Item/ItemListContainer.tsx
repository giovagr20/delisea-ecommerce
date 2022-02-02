import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemCount } from './ItemCount';

export const ItemListContainer = () => {

    return (
        <>
            <div className='container p-2'>
                <ItemCount stock="5" initial="1" />
            </div>
        </>
    )
}