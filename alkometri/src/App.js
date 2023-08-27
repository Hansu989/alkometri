import './App.css';
import React, {useState} from 'react';

function App() {
  const [bottles, setBottles] = useState(0);
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    const litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    const burning = weight / 10;
    let results = grams - (burning * time);
    
    let vastaus = 0;
   if (gender === 'male') {
    vastaus = (results / (weight * 0.7));
   }
   else {
    vastaus = (results / (weight * 0.6));
   }
   setResult(vastaus);
  }

  return (
    <>
    <h3>Calculating alcohol blood level</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Weight</label>
        <input name="weight" type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
      <label>Bottles</label>
      <input type="number" value={bottles} onChange={e => setBottles(e.target.value)}/>
     </div>
     <div>
      <label>Time</label>
      <input type="number" value={time} onChange={e => setTime(e.target.value)}/>
     </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
      </div>
      <div>{result.toFixed(1)}</div>
      <button type="submit">Calculate</button>
    </form>
    </>
  )
}

export default App;
