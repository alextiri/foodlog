import { useContext, useState } from 'react';
import './Foodentry.css'
import { TokenContext } from '../../contexts/TokenContext';
import { useNavigate } from 'react-router';

const FoodEntry = () => {
    const [name, setName] = useState('')
    const [weight, setWeight] = useState(0)
    const [calories, setCalories] = useState(0)
    const [proteins, setProteins] = useState(0)
    const [carbs, setCarbs] = useState(0)
    const [fats, setFats] = useState(0)
    const [plannedTime, setPlannedTime] = useState(0)
    const token = useContext(TokenContext).token

    const navigate = useNavigate()
    const create = () => {
        fetch('http://localhost:3000/foodentry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'gfg_token_header_key': token!
            },
            body: JSON.stringify({
                name: name,
                weight: weight,
                calories: calories,
                proteins: proteins,
                carbs: carbs,
                fats: fats,
                timestamp: plannedTime
            })
        })
        .then(result => {
            result.json()
            navigate('/home')
        })
    }
    
    return (
        <div>
            <h1>Plan a meal</h1>
            <div className="form">
                <div className="name">
                    <div>Name</div>
                    <input onChange={(event) => setName(event.target.value)}></input>
                </div>
                <div className="weight">
                    <div>Weight</div>
                    <input onChange={(event) => setWeight(Number(event.target.value))}></input>
                </div>
                <div className="calories">
                    <div>Calories</div>
                    <input onChange={(event) => setCalories(Number(event.target.value))}></input>
                </div>
                <div className="proteins">
                    <div>Proteins</div>
                    <input onChange={(event) => setProteins(Number(event.target.value))}></input>
                </div>
                <div className="carbs">
                    <div>Carbs</div>
                    <input onChange={(event) => setCarbs(Number(event.target.value))}></input>
                </div>
                <div className='fats'>
                    <div>Fats</div>
                    <input onChange={(event) => setFats(Number(event.target.value))}></input>
                </div>
                <div className='plannedTime'>
                    <div>Planned time</div>
                    <input type="date" onChange={(event) => setPlannedTime(Date.parse(event.target.value))}></input>
                </div>
            </div>
            <div className="buttons">
                <button onClick={create}>Create your meal</button>
                <button onClick={() => {
                    navigate('/home')
                }}>Cancel</button>
            </div>
        </div>
    )
}

export default FoodEntry;