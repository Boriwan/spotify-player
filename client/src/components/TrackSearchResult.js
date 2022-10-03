export default function TrackSearchResult({ track, chooseTrack }) {
    function handlePlay() {
        chooseTrack(track);
    }
    return (
        <div className='tracks' onClick={handlePlay}>
            <img src={track.albumUrl} style={{ height: "50px", width: "50px" }} />
            <div style={{ marginLeft: "3rem" }}>
                <div>{track.title}</div>
                <div style={{ opacity: "0.5" }}>{track.artist}</div>
            </div>
        </div>
    )
}
