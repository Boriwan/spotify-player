import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth"
import { FormControl, Input, InputLabel } from "@mui/material"
import NavBar from "./NavBar";
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResult from "./TrackSearchResult";
import Player from "../Player";

const spotifyWebAPI = new SpotifyWebApi({
    clientId: "dce5a941f124440ebfd1c6992916349f",
})

export default function Dashboard({ code }) {
    const accessToken = useAuth(code)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()

    function chooseTrack(track) {
        setPlayingTrack(track)
        setSearch('')
    }

    useEffect(() => {
        if (!accessToken) return
        spotifyWebAPI.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

        let cancel = false
        spotifyWebAPI.searchTracks(search).then(res => {
            if (cancel) return
            setSearchResults(res.body.tracks.items.map(track => {
                const smallestAlbumImg = track.album.images.reduce(
                    (smallest, image) => {
                        if (image.height < smallest.height) return image
                        return smallest
                    }, track.album.images[0])

                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImg.url
                }
            }))
        })

        return () => cancel = true
    }, [search, accessToken])

    return (
        <>
            <NavBar />

            <div className="glass" id="search">
                <FormControl variant="filled" type="search" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)}>
                    <InputLabel>Search</InputLabel>
                    <Input />
                </FormControl>
            </div>

            <div className="glass">
                <div className="songs">
                    {searchResults.map(track => (
                        <TrackSearchResult
                            track={track}
                            key={track.uri}
                            chooseTrack={chooseTrack}
                        />
                    ))}
                </div>
            </div>

            <div className="player">
                <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
            </div>
        </>
    )
}
