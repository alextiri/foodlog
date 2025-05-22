import { useContext, useEffect, useState } from 'react';
import { TokenContext } from '../../contexts/TokenContext';
import './Home.css'
import { useNavigate } from 'react-router';

type Entry = {
    name: string,
    weight: number,
    calories: number,
    proteins: number,
    fats: number,
    carbs: number,
    timestamp: Date
}

const Home = () => {
    const setToken = useContext(TokenContext).setToken
    const token = useContext(TokenContext).token
    const navigate = useNavigate()
    const [entries, setEntries] = useState<Array<Entry>>([])

    useEffect(() => {
        fetch('http://localhost:3000/foodentries?pageSize=5', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'gfg_token_header_key': token!
            }
        })
        .then(result => result.json() as Promise<Array<Entry>>)
        .then(result => setEntries(result))
    }, [])

    return (
        <div className="home">
            <div className="buttons">
                <button onClick={() => {
                    navigate('foodentry')
                }}>Create a new entry</button>
                <button>Your history</button>
            </div>
            <div className="dashboard">
                <div className="tableHeader">
                    <div className="headerProp">Name</div>
                    <div className="headerProp">Weight</div>
                    <div className="headerProp">Calories</div>
                    <div className="headerProp">Proteins</div>
                    <div className="headerProp">Fats</div>
                    <div className="headerProp">Carbs</div>
                </div>
                <div className="table">
                    {entries.map(entry => (
                        <div className="entry">
                            <div className="entryProp">{entry.name}</div>
                            <div className="entryProp">{entry.weight}</div>
                            <div className="entryProp">{entry.calories}</div>
                            <div className="entryProp">{entry.proteins}</div>
                            <div className="entryProp">{entry.fats}</div>
                            <div className="entryProp">{entry.carbs}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pageButtons">
                <button>Previous Page</button>
                <button>Next Page</button>
            </div>
            <button className="signout" onClick={() => {
                setToken(null)
            }}>Sign-Out</button>
        </div>
    )
}

export default Home;