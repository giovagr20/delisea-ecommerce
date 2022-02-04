import { Item } from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";


export const ItemList = (props: any) => {
    return (
        <div className="row">
            {
                props.items.map((element: any) => {
                    <div className="col-sm">
                        <Item key={element.id}
                            id={element.id}
                            title={element.title}
                            descripcion={element.descripcion}
                            price={element.price}
                            pictureUrl={element.pictureUrl} />
                    </div>
                })
            }
        </div>
    );
} 