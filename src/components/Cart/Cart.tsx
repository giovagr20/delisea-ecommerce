import { useContext } from "react"
import { Products } from "../../models/products";
import { CartContext, CartContextProvider } from "./CartContext";

export const Cart = () => {
  const contextCart = useContext(CartContext);
  return (
    <>
      <div>
        {
          contextCart?.cartList.map((cart: Products) => {
            return (
              <div className="card mb-2" key={cart.id} defaultValue="{props.pictureUrl}" style={{ "width": "20rem" }}>
                <img src={cart.pictureUrl} className="card-img-top" alt={cart.title}
                  style={{ "height": "200px", "width": "auto" }} />
                <div className="card-body">
                  <h5 className="card-title"> {cart.title}</h5>
                  <p className="card-text"> {cart.descripcion} </p> <br />
                  <p className="card-text"> <strong> $  {cart.price}.00  </strong></p>
                </div>
                <div className="card-body">
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}