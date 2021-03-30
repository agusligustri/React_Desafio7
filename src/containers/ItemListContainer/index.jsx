import React, { useEffect, useState } from "react"
import { useParams } from "react-router";
import ItemList from "../../components/ItemList";
import dataBase from "../../mocks/dataBase";



const ItemListContainer = () => {

    const [contador, setContador] = useState(1)

    const onAdd = (stock) => {
        if (contador < stock) {
            setContador(contador + 1);
        } else if (contador == stock) {
            alert("No hay mas stock del producto");
        };
    };

    
    const onSubstract = () => {
        if (contador > 1) {
            setContador(contador - 1);
        } 
    };

    const [products, setProducts] = useState([])
    const {section} = useParams();
    console.log(section);
    
    useEffect(() => {
        new Promise ((resolve, reject) => {
            setTimeout (() => {
                if(section) {
                    resolve(dataBase.filter(x => x.section == section));
                } else {
                    resolve(dataBase);
                };
             }, 2000);
        }).then((result) => setProducts(result));
    }, [section]);

    return (
        <>
            <ItemList products={products} />
        </>
    );
};

export default ItemListContainer;