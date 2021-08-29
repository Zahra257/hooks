import { useState, useEffect} from "react";
import './App.css'
const App = () =>{
 const [type, setType] = useState([])
const [filteredtitles, setfilteredtitles] = useState ([])
const [movie, setMovie] = useState({ title: "", description: "", posterURL: "",  rating: 0, image:""});


const [movies, setmovies] = useState ([
  {       id : 1,
    title : 'Avengers: Infinity War',
    description : 'a',
    posterURL : 'https://www.youtube.com/watch?v=6ZfuNTqbHE8',
    rating : 1,
    image : 'https://www.u-buy.vn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFHZlphc250OUwuX1NMMTM3MV8uanBn.jpg'
},
    {       id : 2,
        title : 'kids Movies',
        description : 'b',
        posterURL : 'https://youtu.be/tcqip3ULaCY',
        rating : 2,
        image : 'https://upload.wikimedia.org/wikipedia/en/2/2a/Delhi_Safari_Poster.jpg'
    }
    ,
    {
      id : 3,
      title : 'Diamond Dog Caper',
      description : 'kids Movies',
      posterURL : 'https://youtu.be/MkjMrzT6TvA',
      rating : 3,
      image : 'https://is5-ssl.mzstatic.com/image/thumb/S7aADi2S93PZseiVoqBgSQ/1000x563.jpg'
  },
    {       id : 4,
        title : 'Captain America: Civil War',
        description : 'd',
        posterURL : 'https://www.youtube.com/watch?v=dKrVegVI0Us',
        rating : 4,
        image : 'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_.jpg'
    },
])
//useeffect filter
useEffect(()=> {
  setfilteredtitles(type.length === 0 ? movies: Object.entries(type)[0][0] === 'rating' ? 
                    movies.filter(el=> el.rating === type.rating) : 
                    movies.filter(el=> el.title.toLowerCase().includes(type.toLowerCase())))
}, [movies,type])

  //ADD A MOVIE 

  const handleSubmit = e => {
    e.preventDefault();
    setmovies([...movies, movie]);
  }
  const add = movie => {
    setmovies([...movies, movie]);
} 
 
  /////////////////
return(
        <div className='App'>
        <input
        type="text"
        placeholder="Search Movies"
        onChange={(e) => setType(e.target.value)}></input>
        0<input type="range" placeholder="rating" min={0} max={5} onChange={(e)=> setType({rating: Number(e.target.value)})} />5
      
        <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="title" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, title: e.target.value }))}/>
      <input type="text" name="description" placeholder="description" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, description: e.target.value }))}/>
      <input type="text" name="posterURL" placeholder="posterURL" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, posterURL: e.target.value }))}/>
      0<input type="range" min={0} max={5} name="rating" placeholder="rating" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, rating: Number(e.target.value) }))}/>5
      <input type="text" name="image" placeholder="poster" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, image: e.target.value }))}/>
        <button>ADD</button>
        </form>

<br/>
   
    
        <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-evenly'}}>
      {filteredtitles.map((e) => ( 
     <>
      {e.title}
      <br/>
      {e.rating}
      <br/>
         <img src={e.image} width="250" height="250"/> 
         <br/>
        
         
     </>
        ))}
      </div>
      
      
       
  
      
        </div>
    )
}
export default App;



