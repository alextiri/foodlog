import { useContext, useState } from 'react';
import './Foodentry.css'
import { TokenContext } from '../../contexts/TokenContext';
import { useNavigate } from 'react-router';

const FoodEntry = () => {
    const [name, setName] = useState('')
    const [weight, setWeight] = useState('')
    const [calories, setCalories] = useState('')
    const [proteins, setProteins] = useState('')
    const [carbs, setCarbs] = useState('')
    const [fats, setFats] = useState('')
    const [plannedTime, setPlannedTime] = useState('')
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
                weight: Number(weight),
                calories: Number(calories),
                proteins: Number(proteins),
                carbs: Number(carbs),
                fats: Number(fats),
                timestamp: Date.parse(plannedTime)
            })
        })
        .then(result => {
            result.json()
            navigate('/home')
        })
    }
    
    return (
        <div>
            <h1 className="title">Plan a meal</h1>
            <div className="form">
                <div className="formItem">
                    <div>Name</div>
                    <input value={name} onChange={(event) => setName(event.target.value)}></input>
                </div>
                <div className="formItem">
                    <div>Weight</div>
                    <input value={weight} onChange={(event) => setWeight(event.target.value)}></input>
                </div>
                <div className="formItem">
                    <div>Calories</div>
                    <input value={calories} onChange={(event) => setCalories(event.target.value)}></input>
                </div>
                <div className="formItem">
                    <div>Proteins</div>
                    <input value={proteins} onChange={(event) => setProteins(event.target.value)}></input>
                </div>
                <div className="formItem">
                    <div>Carbs</div>
                    <input value={carbs} onChange={(event) => setCarbs(event.target.value)}></input>
                </div>
                <div className='formItem'>
                    <div>Fats</div>
                    <input value={fats} onChange={(event) => setFats(event.target.value)}></input>
                </div>
                <div className='formItem'>
                    <div>Planned time</div>
                    <input value={plannedTime} type="date" onChange={(event) => setPlannedTime(event.target.value)}></input>
                </div>
            </div>
            <div className="menuButtons">
                <button onClick={create}>Create your meal</button>
                <button onClick={() => {
                    navigate('/home')
                }}>Cancel</button>
            </div>
        </div>
    )
}

export default FoodEntry;