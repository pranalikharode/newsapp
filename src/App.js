import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { Component } from "react";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 9;
  apikey = process.env.REACT_APP_NEWS_API;
  

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <Navbar />

        <LoadingBar height={3} color="#f11946" progress={this.state.progress} />

        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apikey}
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/Business"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              path="/Entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/Health"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="Health"
                />
              }
            />
            <Route
              path="/Science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              path="/Sport"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="sport"
                />
              }
            />
            <Route
              path="/Technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
