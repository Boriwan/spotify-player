import { Divider } from "@mui/material"

export default function TrackSearchResult({ track, chooseTrack }) {
    function handlePlay() {
        chooseTrack(track);
    }
    return (
        <div className="song">
            <div className='tracks' onClick={handlePlay}>
                <img src={track.albumUrl} style={{ height: "50px", width: "50px" }} />
                <div style={{ marginLeft: "3rem" }} >
                    <div>{track.title}</div>
                    <div style={{ opacity: "0.5" }}>{track.artist}</div>
                </div>
            </div>
            <Divider variant="middle" style={{ margin: "4rem" }} />
        </div>

    )
}
