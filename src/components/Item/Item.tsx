import "bootstrap/dist/css/bootstrap.min.css";
import { Products } from "../../models/products";
import { ItemCount } from "./ItemCount";
import '../../App.css'
import { Link } from "react-router-dom";

export const Item = (props: Products) => {

    return (
        <Link to={`/item/${props.id}`} style={{ "textDecoration": "none" }} className="hover-card" >
            <div className="card mb-2" key={props.id} defaultValue="{props.pictureUrl}" style={{ "width": "20rem" }}>
                <img src={props.pictureUrl} className="card-img-top" alt={props.title}
                    style={{ "height": "200px", "width": "auto" }} />
                <div className="card-body">
                    <h5 className="card-title"> {props.title}</h5>
                    <p className="card-text"> {props.descripcion} </p> <br />
                    <p className="card-text"> <strong> $  {props.price}.00  </strong></p>
                </div>
                <div className="card-body">
                    <ItemCount stock="5" initial="1" />
                </div>
            </div>
        </Link>
    );
};