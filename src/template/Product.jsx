import axios from 'axios';
import {useEffect,useState} from "react";
import ProductCard from '../components/ProductCard/ProductCard';

function Product() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(response =>{
      const {data} = response;
      setData(data);
    });
  },[]); 
  return (
    <>
      <div className="container">
        <header>
          <h1 className='text-center'>Products</h1>
        </header>
        <section className='cards'>
          {data.map((product,index)=>{
              return(
                <ProductCard 
                  key={index} 
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  category={product.category} 
                  description={product.description} 
                  price={product.price}
                />
              )
            })}
        </section>   
      </div>   
    </>
  );  
}



export default Product;
