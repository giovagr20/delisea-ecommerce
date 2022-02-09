import { Item } from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";
import { Products } from "../../models/products";
import { ItemProducts } from "../../constants/products_items";


export const ItemList = (props: Array<Products>) => {
    if (props.length <= 0)
        return (
            <div className="alert alert-primary" role="alert">
                No hay datos!
            </div>
        )
    else
        return (
            <div className="row"> {
                ItemProducts.map((element: Products) => {
                    return (
                        <div className="col-sm" key={element.id}>
                            <Item key={element.id}
                                id={element.id}
                                title={element.title}
                                descripcion={element.descripcion}
                                price={element.price}
                                pictureUrl={element.pictureUrl} />
                        </div>
                    )
                })
            }
            </div>
        );
} 