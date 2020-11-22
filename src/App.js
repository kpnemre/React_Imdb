import './App.css';
import React,{ useState, useEffect} from 'react';
import axios from "axios";
import {CardList} from "./components/CardList";
import {SearchBox} from "./components/SearchBox";


const apiKey = "3ca91bf17a8b671b2e8464cdec300f9f";
const baseUrl = "https://api.themoviedb.org/3/search/movie";
// const baseImageUrl = "https://image.tmdb.org/t/p/w500";


function App() {

  const [movieData, setMovieData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("Matrix");

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_key: apiKey,
          page: 1,
          query: searchKeyword, //TODO: from input
        },
      })
      .then((res) => setMovieData(res?.data?.results))
      .catch((err) => console.log(err));
  }, [searchKeyword]);

// console.log(movieData);


  return (
    <div className="App">
      <SearchBox setSearchKeyword={setSearchKeyword}/>
      <CardList movieData = {movieData}/>
      
    </div>
  );
}

export default App;
