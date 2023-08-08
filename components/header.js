class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        a {
          text-decoration: none;
          color:black;
        }
        
        a:hover {
          opacity: 0.6;
        } 

        .fa {
          padding: 10px;
          font-size: 30px;
          width: 30px;
          text-align: center;
          text-decoration: none;
        }
        
        .fa:hover {
          opacity: 0.6;
        }
        
        .fa-facebook {
          background: #3B5998;
          color: white;
        }
        
        .fa-instagram {
          background: #125688;
          color: white;
        }
      </style>
      <header>
        Phone: 07871 836785
        Email: <a href="mailto:jonedisosteopath@gmail.com">jonedisosteopath@gmail.com</a>
        <a href="https://www.facebook.com/jonathanedisosteopath" class="fa fa-facebook" target="_blank"></a>
        <a href="https://www.instagram.com/jonedis_osteo/" class="fa fa-instagram" target="_blank"></a>
        <a href="index.html"><h1>Jonathan Edis Osteopath</h1>
        <h2>Osteopathy & Osteopathic Lecturing</h2></a>
      </header>
    `;
  }
}

customElements.define('header-component', Header);