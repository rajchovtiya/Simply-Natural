// src/hooks/useCartActions.js
import { useDispatch } from "react-redux";
import { CartAdd, CartDescription, fetchData, removeCartItem } from "./Store";
import { useEffect, useRef, useState } from "react";

const useCartActions = () => {
    const dispatch = useDispatch();
    const [cartData, setCartData] = useState([])
    const [backgroundPos, setBackgroundPos] = useState('center');
    const containerRef = useRef(null);
    const [loadingItemId, setLoadingItemId] = useState(null);

    const addCart = (item) => {
        dispatch(
            CartAdd({
                id: item.id,
                title: item.product__title,
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

    const handleMouseMove = (e) => {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = ((e.pageX - left - window.scrollX) / width) * 100;
        const y = ((e.pageY - top - window.scrollY) / height) * 100;
        setBackgroundPos(`${x}% ${y}%`);
    };

    const handleDelayedRemove = (id) => {
        setLoadingItemId(id);
        setTimeout(() => {
            dispatch(removeCartItem({ id }));
            setLoadingItemId(null);
        }, 1000);
    };

    return { addCart, OneCart, handleMouseMove, cartData, backgroundPos, containerRef, handleDelayedRemove, loadingItemId };
};

export default useCartActions;
