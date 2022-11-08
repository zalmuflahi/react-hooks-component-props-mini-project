import React from "react";
import blogData from "../data/blog";



function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts}/>
    </div>
  )}

function Header(props){
return (
  <header><h1 className="tle">{props.name}</h1></header>
    
)}

function About(props){
return(
  <aside>
      <img id='pic'src={props.image} placeholder='https://via.placeholder.com/215' alt='blog logo'></img>
      <p id='about'>{props.about}</p>
  </aside>
)}

function Article(props){
    let string = ''
    if(props.minutes > 30){
      let m = props.minutes;
      let num = Math.round(m/10)
      for(let i= 0; i<num; i++){
        string += "🍱"
      }
      string += `${m} min read`
    }else{
      let m = props.minutes;
      let num = Math.round(m/5)
      for(let i= 0; i<num; i++){
        string += "☕️"
      }
      string += `${m} min read`
    }
return (
  <article>
    <h3>{props.title}</h3>
    <small>{props.date}</small>
    <p>{props.preview}</p>
    <p>{string}</p>
  </article>
)
}
function ArticleList(props){
    return (
      <main>
      {props.posts.map((post) =>{
        return (
          <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
        )})}
      </main>
    )}



export default App;
