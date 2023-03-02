import "./App.css";
import Sidebar from "./Sidebar";
import MainPage from "./MainPage";
import PlayerFooter from "./PlayerFooter";
import Playlist from "./components/Playlists/Playlist";
import Login from "./components/Login/Login";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import AppTopBar from "./AppTopBar";
function App() {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      {!user === null ? (
        <Login />
      ) : (
        <div className="app">
          <div className="app__left">
            <Sidebar />
          </div>

          {/* // with react router soon to be many pages with navigation */}
          <div className="app__main">
            <AppTopBar />
            <Switch>
              <Route path="/album">
                <Playlist />
              </Route>
              <Route path="/">
                <MainPage />
              </Route>
            </Switch>
          </div>
          <PlayerFooter />
        </div>
      )}
    </>
  );
}

export default App;
