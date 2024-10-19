import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='navbar'>
        <ul>
            <li><Link to="/">Bmi Hesapla</Link></li>
            <li><Link to="about">Bmi Nedir</Link></li>
        </ul>
    </div>
  )
}

export default Header