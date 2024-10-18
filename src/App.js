import React, { Component } from 'react'
import { Route, Routes } from "react-router"
import Header from './components/Header'
import Page from './components/Page'
import Publication from './components/Publication';
import Experience from './components/Experience';
import Project from './components/Project';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datasetSelected: false,
      datasetSelectedAnalyst: false,
      policy: null,
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Page />} />
          <Route
            exact
            path="/pub"
            element={<Publication />}
          />
          <Route
            exact
            path="/exp"
            element={<Experience />}
          />
          <Route
            exact
            path="/project"
            element={<Project />}
          />
        </Routes>
      </div>
    )
  }
}

export default App