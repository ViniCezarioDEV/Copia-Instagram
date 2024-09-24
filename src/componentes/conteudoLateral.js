import logo from '../images/Instagram_icon.webp';
import './conteudoLateral.css';

export default function ConteudoLateral(){
    return (
        <div className='conteudoLateral'>
        
        <img src={logo} className='Logo' alt='Logo'/>
            
        <div>MENU
          <ul>
            <li>Home</li>
            <li>Search</li>
            <li>Explore</li>
            <li>Messages</li>
          </ul>
        </div>

      </div>
    );
}