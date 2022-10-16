import { render } from "@testing-library/react";
import "../components/App.css";
import Playlist from "./Playlist";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";


function App() {
  constructor(props) {
  super(props);
  this.state = {
    searchResults: [
      {name: 'name1', artist: 'artist1', album: 'album1', id: 1};
    ]
  }
}
  
  render() {
  return (
    <div>
      <div className="App">
        <h1>AMP.</h1>
        <SearchBar />
        <div className="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  );
}
  }
}
export default App;
