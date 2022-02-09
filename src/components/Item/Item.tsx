import "bootstrap/dist/css/bootstrap.min.css";
import { Products } from "../../models/products";

export const Item = (props: Products) => {
    
    return (
        <div className="card" key={props.id} defaultValue="{props.pictureUrl}">
            <img src={props.pictureUrl} className="card-img-top" alt="{props.title}"/>
            <div className="card-body">
                <h5 className="card-title"> {props.title}</h5>
                <p className="card-text"> {props.descripcion} </p> <br />
                <p className="card-text"> $ {props.price} </p>
            </div>
        </div>
    );
};