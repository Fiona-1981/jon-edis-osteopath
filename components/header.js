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

        .top-header {
          display: flex;
          justify-content: flex-end;
          justify-content: space-around;
          padding: 10px;
        }

        .main-header {
          text-align: center;
        }
      </style>
      <header>
        <div class="top-header"><div>Phone: 07871 836785
        Email: <a href="mailto:jonedisosteopath@gmail.com">jonedisosteopath@gmail.com</a></div>
        <div><a href="https://www.facebook.com/jonathanedisosteopath" class="fa fa-facebook" target="_blank"></a>
        <a href="https://www.instagram.com/jonedis_osteo/" class="fa fa-instagram" target="_blank"></a></div></div>
        <div class="main-header">
        <a href="index.html"><h1><img src="../logos/je-logo.gif" alt="Jonathan Edis Logo">Jonathan Edis Osteopath</h1>
        <h2>Osteopathy & Osteopathic Lecturing</h2></a></div>
      </header>
    `;
  }
}

customElements.define('header-component', Header);