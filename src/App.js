import React from "react";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import MostWatching from "./pages/MostWatching";
import Series from "./pages/Series";
import Catagories from "./pages/Catagories";
import Directors from "./pages/Directors";
import { Switch, Route, BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/details/:id" component ={MovieDetails} />
          <Route path="/most" component ={MostWatching} />
          <Route path="/series" component ={Series} />
          <Route path="/catagories" component ={Catagories} />
          <Route path="/directors" component ={Directors} />
          {/* <Route path="/details/:id" component ={MovieDetails} exact/> */}
          <Route path="/" component = {Movie} />
          {/* ana sayfa hep altta olur. üsttekilerden uymayan olursa ana sayfaya gitsin. exact kullanımı var bir de */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
