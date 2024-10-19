import style from "./style.module.css";
import Img from "../../images/images.png";

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateBmi } from '../../redux/App/AppSlice';

function Home() {
  const [boy, setBoy] = useState('');
  const [kilo, setKilo] = useState('');
  
  const dispatch = useDispatch();
  const bmi = useSelector((state) => state.app.item.bmi);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (boy && kilo) {
      
      dispatch(calculateBmi({ boy: boy / 100, kilo })); 
    }
  };

  return (
    <div className={`${style.container}`}>
      <div className={`${style.col1}`}>
        <div className={`${style.form}`}>
          <form onSubmit={handleSubmit}>
            <h1>Vücut Kitle İndeksi Hesaplama</h1>
            <p>
              <h4> Vücut Kitle İndeksi Nedir?</h4>
              Kişinin boyuna göre kilosunun ideal olup olmadığını ortaya koyan
              bir parametredir.
            </p>
            <label htmlFor="boy">Boyunuz</label>
            <div className={`${style.boy}`}>
              <input 
                type="number" 
                name="boy" 
                value={boy} 
                onChange={(e) => setBoy(e.target.value)} 
              /> 
              <span>CM</span>
            </div>
            <label htmlFor="kilo">Kilonuz</label>
            <div className={`${style.kilo}`}>
              <input 
                type="number" 
                name="kilo" 
                value={kilo} 
                onChange={(e) => setKilo(e.target.value)} 
              /> 
              <span>KG</span>
            </div>

            <button type="submit">Hesapla</button>
            <h2>Vücut Kitle İndeksiniz : {bmi}</h2>
          </form>
        </div>
      </div>
      <img src={Img} alt="img" />
    </div>
  );
}

export default Home;
