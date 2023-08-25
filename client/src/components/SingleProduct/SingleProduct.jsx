import { useState, useContext } from "react";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import "./SingleProduct.scss";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaCartPlus,
} from "react-icons/fa";

import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context";
const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const{id} = useParams();
    const  {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    const { handleAddToCart } = useContext(Context);   
    const increment = () => {
        setQuantity(preState => preState + 1)
    };

    const decrement = () => {
       setQuantity(preState => {
        if(preState=== 1) return 1;
        return preState - 1 ;
       })
    };
    if(!data) return ;
    const product = data.data[0].attributes;
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left"><img src={process.env.REACT_APP_DEV_URL + product.Img.data[0].attributes.url} alt="" /></div>
                    <div className="right">
                        <span className="name">{product.Title}</span>
                        <span className="price">&#8377;{product.Price}</span>
                        <span className="desc">{product.Desc}</span><div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button className="add-cart-button" onClick={() => {
                                handleAddToCart(data.data[0], quantity);
                                setQuantity(1);
                            }}>
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">Category:{' '}
                                <span>{product.categories.data[0].attributes.Title}</span>
                            </span>
                            <span className="text-bold">Shear:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts productId={id} catogryId={product.categories.data[0].id}/>
            </div>
        </div>
    );
};

export default SingleProduct;
