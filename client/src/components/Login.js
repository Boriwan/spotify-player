import Button from '@mui/material/Button'
import NavBar from './NavBar'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=dce5a941f124440ebfd1c6992916349f&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    return (
        <>
            <NavBar />
            
            <div className="centered">
                <Button id='login_button' variant="contained" href={AUTH_URL} cursor="pointer">
                    Login with Spotify
                </Button>
            </div>
        </>
    )
}
