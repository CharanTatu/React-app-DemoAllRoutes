import React, { useEffect, useState } from "react";

const Productcard = () => {

    const [text, setText] = useState([]);


    useEffect(() => {
        devData();
    }, [])

    const devData = async () => {

        const result = await fetch("https://fakestoreapi.com/products");
        const fetchdata = await result.json();
        console.log(fetchdata);
        setText(fetchdata)

    }

    return (

        <div className="row" >
            {text.map(({ id, title, description, image }) => {
                return (
                    <div key={id} className="col-3">
                        <div className="card-col-4-sm-2">
                            <img className="card-img-top" src={image} alt="Card image cap" ></img>
                            <div className="card text-white bg-info ">
                                <p className="card-header bg-warning">{title}</p>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}
export default Productcard;