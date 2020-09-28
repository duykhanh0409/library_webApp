
import React, {  lazy, Suspense } from "react";
import {
  Switch,
  Route,
  
} from "react-router-dom";
//component

const homePage = lazy(() => import("./Views/index"));
const TeacherPage = lazy(() => import("./components/Teacher/Teacher"));
const BooksPage = lazy(() => import("./components/Books/Books"));
const Login =lazy(()=>import("./Views/login/login"));

const Routers = () => {
  return (
    
    <Suspense fallback={<div>Loading Page</div>}>
      <Switch>
        <Route exact path={'/'} component={homePage} />
        <Route exact path={'/teacher'} component={TeacherPage} />
        <Route exact path={'/books'} component={BooksPage} />
        <Route exact path={'/login'} component={Login}/>
      </Switch>
    </Suspense>
  );
};

export default Routers;
