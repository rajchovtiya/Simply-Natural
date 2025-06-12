// src/hooks/useCartActions.js
import { useDispatch } from "react-redux";
import { CartAdd, CartDescription, fetchData } from "./Store";
import { useEffect, useState } from "react";

const useCartActions = () => {
    const dispatch = useDispatch();
    const [cartData, setCartData] = useState([])

    const addCart = (item) => {
        dispatch(
            CartAdd({
                id: item.id,
                title: item.title,
                img: item.img,
                price: item.amount,
                productdetails: item.productdetails,
                mounts: item.Saleamount,
                quantity: item.quantity || 1,
                Sale: item.Sale
            })
        );
        alert("Added to Cart");
    };

    const OneCart = (items) => {
        dispatch(
            CartDescription({
                id: items.id,
                title: items.product__title,
                img: items.img,
                amount: items.amount,
                productdetails: items.product_details,
                mounts: items.Saleamount,
                category: items.category,
                Sale: items.Sale
                
            })
        );
    };
    useEffect(() => {
        dispatch(fetchData()).then(action => {
            setCartData(action.payload)
        });
    }, [dispatch])

    return { addCart, OneCart, cartData };
};

export default useCartActions;
