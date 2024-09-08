//! This is component file

//! Class Based Component//statefull/smart/container component

//library---> react lib is used build component
//Component is predefined class in react library-->{Component}-->named component

//!--------------------------------------->
// import React,{Component} from "react"

// class App extends Component
// {
// //first method
// render()
// {
//     console.log(this);//pointing to current component
    
//     return <h1>CBC</h1>   //jsx
// }
// }

//export default App

//! 2) functional based component(FBC)/dumb component//stateless component/Presentation component

//* stateless-->no inbuilt property called as state 

// there is no render method...function name has to be file name
//this will not point to current function instead it shows undefined
// console.dir(App)//console is object inside that dir is directory

// import React from "react"

// const App=()=>
// {
//     // console.dir(App)
    
//     return <h1>FBC</h1>
// }

//todo   JSX -->javascript and XML


//* rule 1)to use multiple jsx component wrap it () and with parent but extra node is created in dom
//* wrap it with Fragment from react library
//* in short use <> </>


//* rule 2) jsx should be closed (no unpaired tag only self closing)
//* paired tag is used to show content only 
//* <hr>content</hr> NOT POSSIBLE(void element tag)

//*rule 3)value stored in variable wrap it with {}

//* rule 4) camelCaseConvention
//* eg--> for-->htmlFor
//* onclick-->onClick
// import React from "react"
// const App=()=>
// {
//     return(
//     <React.Fragment>
//     <br>I am break tag</br>
//     <p>Multiple jsx element</p>
//     </React.Fragment>
// )
// }
// export default App
// let stud="Bhakthi"

// return(
//     <>
//     <br/>
//     <h1>{stud}</h1>
//     <h1>JSX</h1>
//     <p>Multiple jsx element</p>
//     <label htmlFor="uname">Enter your name</label>
//     <input type="text" id="uname" />
//     <hr />

    
//     </>
// )
// }
   

// export default App

//* how dom reads

//* <hr/>----><hr>
//* <input/>---><input>
//* <br/>---><br>

//! render one component inside other
//take App.jsx as main and subcomponent as Child
// import React from "react"
// import Child from "./Child"

// const App=()=>
// {
//     return(
//         <>
//         <Child/>
//         </>
//     )
// }

// export default App
//! Applying css using react
//import React from "react"

//* INLINE CSS
// let btnCss={
//     height:"50px",
//     width:"100px",
//     color:"blue",
//     backgroundColor:"pink",
    
// }

// const App=()=>
// {
//     return(
//         <>
//          <h1  style={{color:"green",textAlign:"center"}}>INLINE CSS</h1>
//          <button style={btnCss}>color</button>
//         </>
       
//     )
// }
// export default App


//! global css


// const App=()=>
// {
//     return(
//         <>
//          <h1 id="head">Global CSS</h1>
//          <div className="circle"></div>
//         </>
       
//     )
// }
// export default App

//! module css
// import React from "react"
// import Header from "./module/Header"

// const App=()=>
// {
//     return(
//         <>
//         <Header/>
//         </>
//     )
// }
// export default App

// import React from 'react'
// import ProfileCard from './module/ProfileCard'

// const App = () => {
//   return (
//     <>
//     <ProfileCard/>
//     </>
//   )
// }

// export default App
// import React from 'react'


// const App=()=>
// {
//   let x=999
//   return(
//     <>
//     <h1>hiiii from App.jsx</h1>
// <h1>{x}</h1>

//     </>
//   )
// }

// export default App
// import React,{Component} from "react"

//  class App extends Component
//  {
// // //first method
//  render()
// {
//     console.log(this);//pointing to current component
    
//     return <h1>CBC</h1>   //jsx
//  }
//  }
//  export default App

// import React from 'react'
// import Uncontrolled from './Uncontrolled'

// const App = () => {
//   return (
//     <>
//     <Uncontrolled/>
//     </>
//   )
// }
// export default App

// import React, { Component } from'react'

// class App extends Component
// {
//   render()
//   {
//     return<h1>hi class based component</h1>
//   }
// }

// export default App

// import React from 'react'

// const App=()=>
// {
//   console.dir(App);
//   return(
//     <>
//     <h1>functional based component</h1>
//     </>
//   )
// }
// // export default App

// import React from 'react'
// import Css from './Css'
// const App = () => {
//   return (
//     <>
//     <Css/>
//     </>
//   )
// }

// export default App
import React from 'react'
import SideBar from './components/sidebar/SideBar'
import Main from './components/Main/Main'

const App = () => {
  return (
    <>
    
    <SideBar />
    <Main />
    
    </>
  )
}

export default App