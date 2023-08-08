import React, { useState } from 'react'
import './Product.scss'
import Collapsible from 'react-collapsible';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart, addSave } from '../../redux/cartReducer'

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("image")
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`)
  const formattedPrice = data?.attributes?.price.toLocaleString();
  const dispatch = useDispatch()
  
  return (
    <div className='product'>
      
      {loading ? (
      "Loading..."
      ): (
      <>
        <div className="left">
            <div className="images">
              <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes?.image?.data?.attributes?.url} alt="" onClick={(e)=>setSelectedImg("image")}/>
              <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.image2?.data?.attributes?.url} alt="" onClick={(e)=>setSelectedImg("image2")}/>
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
              
            </div>  
          </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>${formattedPrice}</span>
        <p>{data?.attributes?.description}</p>
        
        <div className="link">
        <button className="add" onClick={()=>dispatch(addToCart({
          id: data.id,
          title: data.attributes.title,
          description: data.attributes.description,
          price: data.attributes.price,
          image: data.attributes.image.data.attributes.url
        }))}>
       Add to bag
        </button>
        </div>
        
        <div className="info">
          <span>Seller: {data?.attributes?.SellerName}</span>
          <span>Tag:{data?.attributes?.scc}</span>
          <hr />
        </div>
        
        <div className="detail">
          <Collapsible trigger="Description">
          <p>{data?.attributes?.description}</p>
          </Collapsible>
          <hr />
          <Collapsible trigger="Additional Info">
          <p>{data?.attributes?.additional_info}</p>
          </Collapsible>
          <hr />
          <Collapsible trigger="Need some help?">
          <p>{data?.attributes?.faq_info}</p>
          </Collapsible>
          <hr />
        </div>
      </div>
      </>
      )}
    </div>
  );
};

export default Product
