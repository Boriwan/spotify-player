import { useEffect, useState } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function Player({ accessToken, trackUri }) {
    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri])

    if (!accessToken) return null
    return (
        <SpotifyPlayer
            styles={{
                activeColor: '#20ffb5',
                bgColor: '#198D8E',
                color: '#7fffd4',
                loaderColor: '#7fffd4',
                sliderColor: '#7fffd4',
                sliderHandleColor: '#126872',
                trackArtistColor: '#95EBEB',
                trackNameColor: '#B5F1F1',
            }}
            syncExternalDevice={false}
            token={accessToken}
            showSaveIcon
            callback={state => {
                if (!state.isPlaying) setPlay(false)
            }}
            play={play}
            uris={trackUri ? [trackUri] : []}
        />
    )
}
