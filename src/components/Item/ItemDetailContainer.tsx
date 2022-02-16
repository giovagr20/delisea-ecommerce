import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Swal from "sweetalert2"
import { ItemProducts } from "../../constants/products_items"
import { Products } from "../../models/products"
import { customFetch } from "../../utils/customFetch"
import { ItemDetail } from "./ItemDetail"


export const ItemDetailContainer = () => {

  const [item, setItem] = useState(Array<Products>());
  const { idItem } = useParams<{ idItem: string }>();

  useEffect(() => {
    customFetch(1500, ItemProducts.filter((item: Products) => item.id === parseInt(idItem as string))).then(result => setItem(result))
  }, []);

  return (
    <> {
      item.length <= 0 ?
        <div className="alert alert-primary" role="alert">
          No hay datos, por favor reintentar </div> :
        item.map((element: Products) => {
          return (
            <ItemDetail key={element.id}
              id={element.id}
              title={element.title}
              descripcion={element.descripcion}
              price={element.price}
              pictureUrl={element.pictureUrl}
              idCategory={element.idCategory}
              category={element.category} />
          )
        })
    }
    </>
  )
}