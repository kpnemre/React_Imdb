import React from "react";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";
import MostWatching from "./pages/MostWatching";
import { Switch, Route, BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/index";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/details/:id" component ={MovieDetails} />
          <Route path="/most" component ={MostWatching} />
          {/* <Route path="/details/:id" component ={MovieDetails} exact/> */}
          <Route path="/" component = {Movie} />
          {/* ana sayfa hep altta olur. üsttekilerden uymayan olursa ana sayfaya gitsin. exact kullanımı var bir de */}
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
