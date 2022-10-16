import "./Playlist.css";
import TrackList from "./TrackList";

const Playlist = () => {
  return (
    <div className="Playlist">
      <input value="New Playlist" />
      <TrackList />
      <button class="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
