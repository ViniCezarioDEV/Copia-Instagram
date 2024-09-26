import logo from '../images/Instagram_icon.webp';
import './conteudoLateral.css';
import ListItem from './listItem.js';

import { IoHome } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoCompass } from "react-icons/io5";
import { IoChatbubbleSharp } from "react-icons/io5";



export default function ConteudoLateral() {
  return (
    <div className='conteudoLateral'>

      <img src={logo} className='Logo' alt='Logo' />

      <div>
        <ul className='navagationButtons'>
          <ListItem text='Home' icon={<IoHome />} />
          <ListItem text='Search' icon={<IoSearch />} />
          <ListItem text='Explore' icon={<IoCompass />} />
          <ListItem text='Messages' icon={<IoChatbubbleSharp />} />

        </ul>
      </div>

    </div>
  );
}