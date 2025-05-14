import { useContext } from 'react';
import { TokenContext } from '../../contexts/TokenContext';
import './Home.css'

const Home = () => {
    const setToken = useContext(TokenContext).setToken
    
    return (
        <div className="home">
            <div className="buttons">
                <button>Create a new entry</button>
                <button>Your history</button>
            </div>
            <div className="dashboard">
                <div>Today's Meals</div>
            </div>
            <button className="signout" onClick={() => {
                setToken(null)
            }}>Sign-Out</button>
        </div>
    )
}

export default Home;