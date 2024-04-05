import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductForm from "./components/ProductForm";
import Productarea from "./components/Productarea";
import Searchmodel from "./components/Searchmodel";


function App() {

  const [category, setCategory] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8081/category")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            setCategory(data)
        })
        .catch((err)=>{
            console.log(err)
            }
        )
    },[])

  return (
    <>
    <ProductForm category={category}/>
     {/* <Navbar/>
     <Searchmodel/>
     <Hero/>
     <Productarea category={category}/> */}
    </>
  );
}

export default App;
