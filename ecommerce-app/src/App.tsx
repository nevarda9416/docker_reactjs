import { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from "./redux/store";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Provider>
  )
}

export default App
