import { useState, useEffect } from "react";
import Shows from "./Shows"
import User from "./User"
import SignIn from "./SignIn"
import {Routes, Route} from 'react-router-dom'

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/shows")
      .then((r) => r.json())
      .then((data) => {
        // console.log(data)
        setShows(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/users")
      .then((r) => r.json())
      .then((data) => {
        // console.log(data)
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [lotteries, setLotteries] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/lotteries")
      .then((r) => r.json())
      .then((data) => {
        // console.log(data)
        setLotteries(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/shows" element={shows && <Shows shows={shows}/>} />
        <Route path="/signin" element={ <SignIn/>} />
        <Route path='/user/:id' element={users && <User users={users} lotteries={lotteries} shows={shows} />} />
      </Routes>
    </>
  );
}

export default App;
