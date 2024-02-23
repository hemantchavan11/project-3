import React, { useEffect, useState } from "react";
import './App.css'
import ProductDetails from "./ProductDetails";
import { useNavigate } from "react-router-dom";

function Products(){
  const [ProductImages, setProductImages] = useState([]);
  const [ProductData,setProductData] = useState([]);
  const navigate = useNavigate("");

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products").then((resp)=>{
      resp.json().then((result)=>{
        console.log(result);
        setProductImages(result);
      })
    })

  },[]);

  function getPeoductDetails(index){
    const Data= ProductImages.filter((item,i)=>{
        return index === i;
    })
    setProductData(Data);
    console.log(ProductData);

    navigate(`/ProductDetails/`, {state:{ProductData:Data}});
  }

  return(
    <div className="Products">
       
        <div className="ProductImages">
        {
          ProductImages.map((item,index)=>
           
           <div className="ImgCard">
              <div>
                <img key={index} onClick={()=>getPeoductDetails(index)} src={item.image} alt="productImages" />
              </div>
                <div className="ProductCaption">
                  <div>
                    <span>{item.title}</span>
                  </div>
                  <div>
                    <p>Price: ${item.price}</p>
                  </div>
                </div>
            </div>
          )
        }
    
        </div>
    </div>
  )

}
export default Products;