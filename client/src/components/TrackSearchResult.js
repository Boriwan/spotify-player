import { Divider } from "@mui/material";

export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
  }
  return (
    <div>
      <div className="track">
        <div className="trackAlign" onClick={handlePlay}>
          <img
            src={track.albumUrl}
            style={{ height: "50px", width: "50px" }}
            alt="album"
          />
          <div style={{ marginLeft: "3rem" }}>
            <div>{track.title}</div>
            <div style={{ opacity: "0.5" }}>{track.artist}</div>
          </div>
        </div>
      </div>
      <Divider variant="middle" style={{ margin: "1rem" }} />
    </div>
  );
}
