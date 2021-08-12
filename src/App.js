import "./App.scss";


import Header from '../src/Components/Header/Header'
import Content from '../src/Components/Content/Content'
import Works from '../src/Components/works/works'
import Skills from '../src/Components/skills/skills'
import About from '../src/Components/About/About'
import Contact from '../src/Components/Contact/Contact'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const Layout = (props) => {
  return(
    <div className="layout">{props.children}
    
    </div>
  )
}

const App = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Content/>
            <Works/>
            <Skills/>
            <About/>
            <Contact/>
            
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
