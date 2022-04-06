import { useState, useEffect } from "react";

import ItemDetail from '../ItemDetail/ItemDetail';

import mockProducto from '../../Utils/productMock';


const ItemDetailContainer = () => {

    const [datosProductos, setDatosProductos] = useState({})

    const getProductos = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProducto)
        })
    }

    useEffect( () => {
        
        getProductos().then( (producto) => {
            setDatosProductos(producto)
        }).finally( () => {
            console.log(producto)
        })

    }, []);

    return (
        <div>
            <ItemDetail data={datosProductos}/>
        </div>
    )
}

export default ItemDetailContainer