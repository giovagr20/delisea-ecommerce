import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { CartContext, CartContextProvider } from "../Cart/CartContext";
import { Products } from "../../models/products";

export const ItemCountDetail = ({ initial, stock, product }: { initial: number, stock: number, product: Products }) => {
  const [stockAvailable, setStockAvailable] = useState(initial);

  const cartContext = useContext(CartContext);
  let navigate = useNavigate();

  let setMaximumStock = () => {
    if (stockAvailable < stock)
      setStockAvailable(stockAvailable + 1);
    else
      Swal.fire({
        title: "No hay más en stock",
        icon: "info",
        showConfirmButton: true,
      });
  };

  let setMinimumStock = () => {
    if (stockAvailable > 1)
      setStockAvailable(stockAvailable - 1);
    else
      Swal.fire({
        title: "Debes elegir por lo menos un producto",
        icon: "error",
        showConfirmButton: true,
      });
  };

  const addProductQuantity = () => {
    Swal.fire({
      title: "Exito",
      html: `Se agrego exitosamente! <br> <strong>Cantidad => ${stockAvailable} </strong>`,
      icon: "success",
      showConfirmButton: true,
    }).then((response) => {
      if (response.isConfirmed) {

        navigate('/cart', { replace: true });
      }
    })
  };

  return (
    <>
      <div className="row">
        <div className="col-sm">
          <div className="input-group mb-3">
            <button
              onClick={setMaximumStock}
              className="btn btn-outline-primary"
              id="basic-addon1"
            >
              +
            </button>
            <span className="px-2"> {stockAvailable} </span>
            <button
              onClick={setMinimumStock}
              className="btn btn-outline-primary"
              id="basic-addon1"
            >
              -
            </button>
          </div>
        </div>
        <div className="col-sm">
          <button
            onClick={addProductQuantity}
            className="btn btn-success btn-sm"
            id="basic-addon1"
          >
            Agregar <em className="bi bi-check2-all" />
          </button>
        </div>
      </div>
    </>
  )
}