"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";


type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};


type CartContextType = {

  items: CartItem[];

  addItem: (item: CartItem) => void;

  removeItem: (id:number)=>void;

};


const CartContext = createContext<CartContextType | null>(null);



export function CartProvider({
  children,
}:{
  children:ReactNode;
}) {


  const [items,setItems] = useState<CartItem[]>([]);



  function addItem(item:CartItem){


    setItems((prev)=>{


      const exist = prev.find(
        x=>x.id===item.id
      );


      if(exist){

        return prev.map(x=>
          x.id===item.id
          ?
          {
            ...x,
            quantity:x.quantity+1
          }
          :
          x
        );

      }


      return [
        ...prev,
        {
          ...item,
          quantity:1
        }
      ];


    });


  }



  function removeItem(id:number){

    setItems(prev=>
      prev
      .map(item=>
        item.id===id
        ?
        {
          ...item,
          quantity:item.quantity-1
        }
        :
        item
      )
      .filter(item=>item.quantity>0)
    );

  }



  return (

    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
      }}
    >

      {children}

    </CartContext.Provider>

  );

}



export function useCart(){

  const context = useContext(CartContext);


  if(!context){

    throw new Error(
      "useCart must be inside CartProvider"
    );

  }


  return context;

}