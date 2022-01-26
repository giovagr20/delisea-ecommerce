
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import logo from '../logocode.png';

const nombreApp = 'Delisea Gourmet';

export const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-primary text-color'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='https://giovaapp.herokuapp.com/' target='_blank' rel='noreferrer'>
                    <img src={logo} alt='' width='30' height='24' /> {nombreApp}
                </a>
                <button className='navbar-toggler' type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse d-right' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link active' aria-current='page' href='#'> Inicio</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'> Productos</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'> Contactenos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}