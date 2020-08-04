import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

const TeacherItem: React.FC = () => {
  return ( 
    <article className="teacher-item">
      <header>
      <img src="https://api.adorable.io/avatars/285/lemoryluucas@adorable.io.png" alt="Lemory Lucas"></img>
      
      <div>
      <strong>Lemory Lucas</strong>
      <span>T.I</span>
      </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /><br />
       Vestibulum vel efficitur nibh. 
       Sed mollis, velit ut tempor accumsan, ex diam euismod enim, in commodo massa urna eu tellus. Maecenas vitae arcu interdum, molestie risus finibus, congue odio.
       In nec semper elit.
      </p>
      <footer>
        <p>
          Preço por hora:
          <strong> R$ 150,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>  
  );
}

export default TeacherItem;