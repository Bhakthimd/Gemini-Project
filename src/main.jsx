import ReactDom from 'react-dom/client'
import React from 'react'
import App from './App'
import "./index.css"
import ContextProvider from './context/context'

ReactDom.createRoot(document.getElementById("root")).render(

    <ContextProvider>
     <App/>
    </ContextProvider>

)