import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Product from "./Components/Product";
import Cart from "./Components/Cart"
import { useState } from "react";
import { useEffect } from "react";


const Router = () => {


  const [cartItems,setItems] = useState([])
  const [isVisible,setVisible]=useState(false)
  const [cartValue,setValue] = useState(0)
    function AddToCart(item){
     setItems((lastItem)=>[...lastItem,item])
      setValue(cartValue +1)
      setVisible(true)
    }
    
    useEffect(() => {
      let timeoutId;
    
      if (isVisible) {
        timeoutId = setTimeout(() => {
          setVisible(false);
        }, 4000);
      }
    
      return () => {
        // Clear the timeout when the component is unmounted or when isVisible changes
        clearTimeout(timeoutId);
      };
    }, [isVisible]);
    










  const router = createBrowserRouter([
    {
      path: "/",
      element: <App items={cartValue}/>,
      errorElement:'',
    },{
      path:'jewelery',
      element:<Product AddToCart={AddToCart} items={cartValue} isVisible={isVisible}/>
    },{
      path:"men's-clothing",
      element:<Product AddToCart={AddToCart} items={cartValue}  isVisible={isVisible}/>
    },{
      path:"women's-clothing",
      element:<Product AddToCart={AddToCart} items={cartValue}  isVisible={isVisible}/>
    },{
      path:"electronics",
      element:<Product AddToCart={AddToCart} items={cartValue}  isVisible={isVisible}/>
    },{
      path:"/cart",
      element:<Cart items={cartValue} cartList={cartItems}/>
    }
   ])

  return <RouterProvider router={router} />;
};

export default Router;