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

        .no-hover:hover {
          opacity: 1;
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
          margin-left: 35px;
        }

        .main-header {
          text-align: center;
        }

        header {
          padding: 30px;
        }
      </style>
      <header>
        <div class="top-header">
        Phone: 07871 836785
        <a href="mailto:jonedisosteopath@gmail.com">Email: jonedisosteopath@gmail.com</a>
        <p>
        <a href="https://www.facebook.com/jonathanedisosteopath" class="fa fa-facebook" target="_blank"></a>
        <a href="https://www.instagram.com/jonedis_osteo/" class="fa fa-instagram" target="_blank"></a>
        </div>
        </p>
        <div class="main-header">
        <a class="no-hover" href="../index.html">
        <img src="../logos/je-logo.gif" alt="Jonathan Edis Logo">
        <h1>Jonathan Edis Osteopath</h1>
        <h2>Osteopathy & Osteopathic Lecturing</h2>
        </a>
        </div>
        <ul class="menu">
          <li class="menu-item"><a href="../index.html">Back to home</a></li>
          <li class="menu-item"><a href="osteopathy-greenwich.html">Osteopathy in Greenwich</a></li>
          <li class="menu-item"><a href="osteopathic-lecturing.html">Osteopathic Lecturing</a></li>
          <li class="menu-item"><a href="what-is.html">What is Osteopathy?</a></li>
          <li class="menu-item"><a href="gallery.html">Gallery</a></li>
          <li class="menu-item"><a href="about-me.html">About Me</a></li>
          <li class="menu-item"><a href="contact.html">Contact</a></li>
        </ul>
      </header>
    `;
  }
}

customElements.define('header-component', Header);