import { Products } from "../../models/products";

export const ItemDetail = (props: Products) => {
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}