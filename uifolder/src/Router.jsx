import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Product from "./Components/Product";
import Cart from "./Components/Cart"
import { useState } from "react";


const Router = () => {


  const [cartItems,setItems] = useState([])
  const [cartValue,setValue] = useState(0)
    function AddToCart(item){
     setItems((lastItem)=>[...lastItem,item])
      setValue(cartValue +1)
      
    }
    

// useEffect(()=>{
// console.log(cartItems)
// },[cartItems])








  const router = createBrowserRouter([
    {
      path: "/",
      element: <App items={cartValue}/>,
      errorElement:'',
    },{
      path:'jewelery',
      element:<Product AddToCart={AddToCart} items={cartValue}/>
    },{
      path:"men's-clothing",
      element:<Product AddToCart={AddToCart} items={cartValue}/>
    },{
      path:"women's-clothing",
      element:<Product AddToCart={AddToCart} items={cartValue}/>
    },{
      path:"electronics",
      element:<Product AddToCart={AddToCart} items={cartValue} />
    },{
      path:"/cart",
      element:<Cart items={cartValue} cartList={cartItems}/>
    }
   ])

  return <RouterProvider router={router} />;
};

export default Router;