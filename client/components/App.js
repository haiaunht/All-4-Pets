import React from "react"
import { hot } from "react-hot-loader/root"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import 'regenerator-runtime/runtime'

import Navbar from "./Navbar"
import Pets from "./Pets"
import PuppiesIndexPage from "./PuppiesIndexPage"
import PuppiesShowPage from "./PuppiesShowPage"
import PokemonIndexPage from "./PokemonIndexPage"
import PokemonShowPage from "./PokemonShowPage"
import SurrenderForm from "./SurrenderForm"
import About from "./About"

const App = props => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Pets} /> */}
          <Route exact path="/pets" component={Pets} />
          <Route exact path="/pets/puppies" component={PuppiesIndexPage} />
          <Route exact path="/pets/puppies/:id" component={PuppiesShowPage} />
          <Route exact path="/pets/pokemon" component={PokemonIndexPage} />
          <Route exact path="/pets/pokemon/:id" component={PokemonShowPage} />
          <Route exact path="/adoptions/new" component={SurrenderForm} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default hot(App)
