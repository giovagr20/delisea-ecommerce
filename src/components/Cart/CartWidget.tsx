import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';

const badgeQuantity = 4;

export const CartWidget = () => {
    return (
        <>
            <Link to="/cart">
                <button className="btn btn-primary position-relative">
                    <i className="bi bi-cart-plus">
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{badgeQuantity}</span>
                    </i>
                </button>
            </Link>
        </>
    )
}