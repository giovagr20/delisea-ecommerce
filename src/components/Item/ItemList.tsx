import { Item } from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";
import { Products } from "../../models/products";
import { ItemProducts } from "../../constants/products_items";
import { useEffect, useState } from "react";

export const ItemList = (props: Array<Products>) => {

    const [properties, setProperties] = useState(props as Array<Products>);

    useEffect(() => {
        console.log(props.length);
        setProperties(props);
    }, []);

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
                        <div className="col-md" key={element.id}>
                            <Item key={element.id}
                                id={element.id}
                                title={element.title}
                                descripcion={element.descripcion}
                                price={element.price}
                                pictureUrl={element.pictureUrl}
                                idCategory={element.idCategory}
                                category={element.category} />
                        </div>
                    )
                })
            }
            </div>
        );
} 