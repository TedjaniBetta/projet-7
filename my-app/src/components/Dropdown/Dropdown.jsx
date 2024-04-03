import { useState } from 'react'
import './Dropdown.scss'
import DropdownArrow from './dropdownarrow.png'

function Dropdown({title, page, content}) {
    // Utiliser un état pour gérer l'ouverture/fermeture du menu déroulant
    const [open, setOpen] = useState(false);


  // Créer une fonction pour basculer l'état du menu déroulant
  function toggleDropdown() {
    setOpen((prevOpen) => !prevOpen);
  }
  console.log(title, page, content)
  return (
    <div className="dropdown">
      <div className={"dropdown__button dropdown__button--" + page} onClick={toggleDropdown}>
        {title}
        <img
          className={`dropdown__button__arrow dropdown__button__arrow--${page} dropdown__button__arrow--${open ? "open" : "close"}`}
          src={DropdownArrow}
          alt="icone_dropdown"
        />
      </div>
      <ul className={`dropdown__list dropdown__list--${open ? "open" : "close"}`}>
        {Array.isArray(content) ? (
          content.map((item, index) => (
            <li className={"dropdown__list__item dropdown__list__item--"+page} key={index}>
              {item}
            </li>
          ))
        ) : (
          <li className={"dropdown__list__item dropdown__list__item--"+page}>{content}</li>
        )}
      </ul>
    </div>
  );
}


export default Dropdown;