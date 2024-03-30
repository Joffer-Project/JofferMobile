import React, { createContext, useContext, useState } from "react"

const SwipeContext = createContext(); 

export const SwipeProvider= ({children}) => {
    const[userSwipes, setUserSwipes] = useState([]);
    const [companySwipes, setCompanySwipe] = useState([]);

    const addUserSwipe = (userId) => {
        setUserSwipes((prev) => [...prev, userId]);
    }

    const addCompanySwipe = (companyId) => {
        setCompanySwipe((prev) => [...prev, companyID]);
    }


    return (
    <SwipeContext.Provider value={{ userSwipes, companySwipes, addUserSwipe, addCompanySwipe }}>
      {children}
    </SwipeContext.Provider>

    )
}

export const useSwipeContext = () => useContext(SwipeContext);