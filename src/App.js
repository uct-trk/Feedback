import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom'
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
/* import Card from "./components/shared/Card";
import Post from "./components/Post";
import Post2 from "./components/Post2"; */
import { FeedbackProvider } from "./context/FeedbackContext";


function App() {
  return (
    <>
      <FeedbackProvider>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route exact path="/" element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              } />
              <Route path="/about" element={<AboutPage />} />
              {/*  <Route exact path="/post/:id/:name" element={<Post />} />
            <Route exact path="/put/*" element={<Post2 />} /> */}
            </Routes>

            {/*    <Card>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </Card> */}
          </div>
          <AboutIconLink />
        </Router>
      </FeedbackProvider>
    </>
  );
}

export default App;
