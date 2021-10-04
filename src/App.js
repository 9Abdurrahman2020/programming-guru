import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import AllCourses from './components/AllCourses/AllCourses';
import { createContext, useEffect, useState } from 'react';
export const coursesContext = createContext('courses');
function App() {
  const [courses,setCourses] = useState([]);
    useEffect( ()=>{
        fetch('./data/courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[]);
  return (
    <div>
     <coursesContext.Provider value ={courses}>
     <Router>
        <Header/>
          <Switch>
            <Route exact path="/">
              <Body/>
            </Route>
            <Route path="/home">
              <Body/>
            </Route>
            <Route path="/courses">
              <AllCourses/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        <Footer/>
      </Router>  
     </coursesContext.Provider>
    </div>
  );
}

export default App;
