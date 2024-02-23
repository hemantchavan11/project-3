import React from "react";
import { useLocation } from "react-router";

function ProductDetails() {
    const location = useLocation();
    const ProductData = location.state?.ProductData || [];

    console.log("Product Details", ProductData);
    return (
        // <div>
        //     <h1>Product Details</h1>
        //     <ul>
        //         { ProductData ? <div><li>  {ProductData[0].title} </li>
        //         <li>  {ProductData[0].price} </li>
        //         <li>  {ProductData[0].description} </li>
        //         <li>  {ProductData[0].category} </li>
        //         <li>  {ProductData[0].rating.count} </li>
        //         <img className="DetailedImg" src={ProductData[0].image} alt="PImg" />

        //         </div> : null}
        //     </ul>
        // </div>

        <div className="Products">

            <div className="ProductImages">
                <div className="ImgCard">
                    <div>
                        <img src={ProductData[0].image} alt="PImg" />
                    </div>
                    <div className="ProductCaption">
                        <div>
                            <p>{ProductData[0].title} </p>
                            <p>{ProductData[0].description}</p>
                            <p>{ProductData[0].category}</p>
                            <p>{ProductData[0].rating.count} </p>
                        </div>
                        <div>
                            <p>Price: ${ProductData[0].price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails;