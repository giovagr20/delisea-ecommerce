import { Products } from "../../models/products";
import { ItemCountDetail } from "./ItemCountDetail";
import { Qty } from "../../models/quantity";



export const ItemDetail = (props: Products) => {

  const initial = 1;
  const stock = 20;

  return (
    <div className="row p-4">
      <div className="col-md-4">
        <img src={props.pictureUrl} alt={props.title} className="rounded float-start"
          style={{ "width": "auto", "height": "auto" }} />
      </div>
      <div className="col-md-8">
        <div className="container">
          <div className="mb-3 row">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {props.title}
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>{props.descripcion}</strong>
                    <br />
                    <code> $ {props.price}.00 </code>
                  </div>
                  <div className="accordion-body">
                    <ItemCountDetail initial={initial} stock={stock} product = {props} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}