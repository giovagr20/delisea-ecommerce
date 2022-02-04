import "bootstrap/dist/css/bootstrap.min.css";

export const Item = (props: any) => {
    
    return (
        <div className="card" key={props.id}>
            <img src="{props.pictureUrl}" className="card-img-top" alt="Datos"/>
            <div className="card-body">
                <h5 className="card-title"> {props.title} </h5>
                <p className="card-text"> {props.descripcion} </p> <br />
                <p className="card-text"> {props.price} </p>
            </div>
        </div>
    );
};