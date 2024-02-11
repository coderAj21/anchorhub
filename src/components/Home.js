import React,{useState} from 'react';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

const Home = () => {
    const [isUser,setUser]=useState(false);
    const[isLogin,setLogin]=useState(true);
    return (
      <div>
      {
        isUser?
        (<Dashboard setUser={setUser} isUser={isUser}/>)
        :
        (
          isLogin?
          (<Login isLogin={isLogin} setLogin={setLogin} setUser={setUser}/>)
          :
          (<Signup isLogin={isLogin} setLogin={setLogin} setUser={setUser}/>)
        )
      }
      </div>
    )
}

export default Home