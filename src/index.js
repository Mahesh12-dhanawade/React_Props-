// index.js - It is main file in src folder...
// components-  It will create functionality and depending on functionality it will provide me output...
// avoid div soup
// className :Instead of class- CAMEL CASE
// claose every element

// import React from 'react'
// // to use render mathod we use -react-dom
// import ReactDOM from 'react-dom'

// // making component
// function Greeting(){
//   return(
//     <h1>Hellow world</h1>
//   )
// }

// ReactDOM.render(<Greeting/>,document.getElementById('root'))

// -------------------------------------------------------------------//

// import React from "react";
// // to use render mathod we use -react-dom
// import ReactDOM from "react-dom";
// const Greeting = () => {
//   // return React.createElement('h1',{},'Hellow world')

//   // JSX function
//   return (
//     <>
//       <div className="">
//         <h3>Hello World!</h3>
//         <ul>
//           <li>
//             <a href="#">Click me</a>
//           </li>
//         </ul>
//         <img src="" alt="" />
//       </div>
//     </>
//   );
// };

// ReactDOM.render(<Greeting />, document.getElementById("root"));

// -------------------------------------------------------------------//

// import React from "react";
// import ReactDOM from "react-dom";

// function Greeting(){
//   return(
//     <>
//     <h1>Hello world</h1>
//     <Massage/>
//     <Person/>
//     </>

//   )
// }

// const Person = () =>{
//   return <h2>Mahesh Dhanawade</h2>
// }

// const Massage = () =>{
//   return(
//    <p>How can I print</p>
//   )
// }

// ReactDOM.render(<Greeting/>, document.getElementById('root'));

// -------------------------------------------------------------------//
// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// function Booklist(){
//   return(
//     <section className="booklist">
//       <Book/>
//       <Book/>
//       <Book/>
//     </section>

//   )
// }

// const Book = ()=>{
//   return(
//     <section className="book">
//       <Image/>
//       <BookName/>
//       <Author/>
//     </section>

//   )
// }

// const Image =()=>{
//   return <img src="https://images-na.ssl-images-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg" alt="The Monk Who Sold" />
// }

// const Author =()=>{
//   return <h1 style={{color:'#744f4f'}}>Robin Sharma</h1>
// }

// const BookName=()=>{
//   return(
//     <h1>The Monk Who Sold His Ferrari</h1>
//   )
// }

// ReactDOM.render(<Booklist/>, document.getElementById('root'))
// // ReactDOM.render(<Book/>, document.getElementById('root'))

// =======================================================================

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// function Booklist(){
//   return(
//     <section>
//       <Book/>
//     </section>
//   )
// }

// //global variable
// const author = 'Robin Sharma'
// const Book = ()=> {

//   const book_title='The Monk Who Sold';
//   return(
//     <article className="book">
//       <img src="https://images-na.ssl-images-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg" alt="The Monk Who Sold" />
//       <h1>{book_title}</h1>
//       <h1>{author}</h1>
//     </article>
//   )
// }

// ReactDOM.render(<Booklist/>,document.getElementById('root'))

// =======================================================================

// Props ==> It is nothing but properties
// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// const author = 'Robin Thapa'
// const title = 'The Monk Who Sold'

// const img= "https://images-na.ssl-images-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg"

// function Booklist(){
//   return (
//     <section className="booklist">
//       <Book/>
//       <Book/>

//     </section>
//   )
// }

// const Book = () =>{
//   return(
//     <div className="book">
//       <img src={img} alt="The monk who sold" />
//       <h1>{title}</h1>
//       <h2>{author}</h2>
//     </div>

//   )
// }
// ReactDOM.render(<Booklist/>,document.getElementById('root'))

// .........=======================================================================......//
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// const title = "The monk who sold";
// const img =
//   "https://images-na.ssl-images-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg";
// const author = "Robin Thapa";

// function Booklist() {
//   return (
//     <div className="booklist">
//       <Book job = "devoloper" />
//       <Book employee='mahesh' number={32}/>
//     </div>
//   );
// }

// const Book = (props) => {
//   console.log(props)

//   return (

//     <div className="book">
//       <img src={img} alt="The monk who sold" />
//       <h1>{title}</h1>
//       <h2>{author}</h2>
//       <p style={{fontSize:15}}>{props.job}</p>
//       <p style={{fontSize:20}}>{props.employee}</p>
//       <p>{props.number}</p>

//     </div>
//   );
// };

// ReactDOM.render(<Booklist />, document.getElementById("root"));

//===================================.....................//
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// //Props
// // creating object
// const firstBook = {
//   img: 'https://m.media-amazon.com/images/I/818e+fq7+BL._AC_UY327_FMwebp_QL65_.jpg',
//   title : 'Word Power Made Easy',
//   author:  'Norman Lewis'
// }

// const secondBook ={
//   img: 'https://m.media-amazon.com/images/I/81u1tAzX3US._AC_UY327_FMwebp_QL65_.jpg',
//   title : 'The Canterbury Tales',
//   author:  'Geoffrey Chaucer'

// }

// // const thirdBook ={
// //   img: 'https://m.media-amazon.com/images/I/81tEgsxpNZS._AC_UY327_QL65_.jpg',
// //   title : 'As a Man Thinketh',
// //   author:  'James Allen'

// // }

// const Booklist=()=>{
//   return(
//     <div className="booklist">
//       <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
//       <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>

//     </div>

//   )
// }

// const Book=(props)=>{
//   // console.log(props);
//   const {img, title, author}= props;
//   return(
//     <div className="book">
//        <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4 style={{fontSize:15, color:'#744f4f'}}>{author}</h4>

//     </div>
//   )
// }

// ReactDOM.render(<Booklist/>, document.getElementById('root'))

//#######==========PROPS CHILDREN=========//
//#######===================//

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// const name = ['John', 'Prem', 'Mahesh'];

// const newNames = name.map((name)=>{
//   return <h1>{name}</h1>

//   }
// )

const books = [
  {
    id:1,
    img: "https://m.media-amazon.com/images/I/818e+fq7+BL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Word Power Made Easy",
    author: "Norman Lewis",
  },

  {
    id:2,
    img: "https://m.media-amazon.com/images/I/81u1tAzX3US._AC_UY327_FMwebp_QL65_.jpg",
    title: "The Canterbury Tales",
    author: "Geoffrey Chaucer",
  },

  {
    id:3,
    img: "https://m.media-amazon.com/images/I/81tEgsxpNZS._AC_UY327_QL65_.jpg",
    title: "As a Man Thinketh",
    author: "James Allen",
  },
  {
    id:4,
    img: "https://m.media-amazon.com/images/I/81NDdnVUVkL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Success Secrets of Amazon",
    author: "Steve Anderson",
  },

  {
    id:5,
    img: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY327_FMwebp_QL65_.jpg",
    title: "The Alchemist",
    author: " Paulo Coelho",
  },

  {
    id:6,
    img: "https://m.media-amazon.com/images/I/71e9MY-XE9L._AC_UY327_FMwebp_QL65_.jpg",
    title: "The Blue Umbrella",
    author: "Ruskin Bond ",
  },


];

const Booklist = () => {
  return (
    <div className="booklist">
      {books.map((book) => {
        //taking data
        const { img, title, author } = book;
        return <Book book={book}  key={book.id}/>;
      })}
    </div>
  );
};

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <div className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </div>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
