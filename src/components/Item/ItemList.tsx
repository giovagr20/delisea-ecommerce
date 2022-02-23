import "bootstrap/dist/css/bootstrap.min.css";
import { Products } from "../../models/products";
import { ItemProducts } from "../../constants/products_items";
import { useEffect, useState } from "react";
import { Item } from "./Item";
import { customFetch } from "../../utils/customFetch";
import { useParams } from "react-router";
import Swal from "sweetalert2";


export const ItemList = (props: number) => {

    const { idCategory } = useParams<{ idCategory: string }>();
    const [properties, setProperties] = useState(Array<Products>());

    useEffect(() => {
        customFetch(2000, ItemProducts.filter((item: Products) => {
            if (parseInt(idCategory as string) === undefined) return item;
            return item.idCategory === parseInt(idCategory as string);
        })).then((result: Array<Products>) => setProperties(result)).catch(err => console.log(err));
    }, [properties]);
    return (
        <> {
            <div className="row"> {
                properties.length !== 0 ?
                    properties.map((element: Products) => {
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
                    }) : ItemProducts.map((element: Products) => {
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
        } </>
    );
} 