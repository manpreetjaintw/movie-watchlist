import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './screen/login/Login';
import Registration from './screen/registration/Registration';
import MainScreen from './screen/mainScreen/MainScreen';
import WatchListScreen from './screen/watchscreenlist/WatchListScreen';
import { ProtectedRoute } from './route/ProtectedRoute';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/mainscreen" element={<MainScreen />} />
          <Route path="/watchlistscreen" element={<WatchListScreen />} />
        </Route>

      </Routes>
    </Router>

  );
}

export default App;