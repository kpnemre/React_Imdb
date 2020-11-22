import React from "react";
import Movie from "./Movie";
import MovieDetails from "./MovieDetails";
import { Switch, Route, BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/index";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/details/:id" component ={MovieDetails} />
          <Route path="/" component = {Movie} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
