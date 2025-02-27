import { createContext, useState } from "react";

const CardContext = createContext({})

const CardProvider =({children})=>{

    const [cardItem, setcardItem] = useState([])

    const addTocard =(id) =>{
        console.log("add");
        
    }
    const RemoveFromCard =() =>{
        console.log("Remove From Card");
        
    }


    return <CardContext.Provider value={{addTocard ,RemoveFromCard,cardItem}}>{ children }</CardContext.Provider>
}

export {CardContext ,CardProvider}