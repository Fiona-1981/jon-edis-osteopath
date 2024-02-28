class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .no-hover:hover {
          opacity: 1;
        }

        .top-header {
          margin-left: 35px;
        }

        .main-header {
          text-align: center;
        }

        header {
          padding: 30px;
          background-color: gray;
          color: white;
        }

        a {
          color: white;
        }

        a:hover {
          opacity: 0.6;
        }

        .menu .icon {
          display: none;
        }
        
        @media screen and (max-width: 600px) {
          .menu a {
            display: none;
          }
          .menu a.icon {
            float: right;
            display: block;
          }
        }
        
        @media screen and (max-width: 600px) {
          .menu.responsive {position: relative;}
          .menu.responsive a.icon {
            position: absolute;
            right: 0;
            top: 0;
          }
        
          .menu.responsive a {
            float: none;
            display: block;
            text-align: left;
          }
        }
      </style>
      <header>
        <div class="top-header">
        Phone: +44 (0)7871 836785
        Email: <a href="mailto:jonedisosteopath@gmail.com">jonedisosteopath@gmail.com</a>
        <p>
        <a href="https://www.facebook.com/jonathanedisosteopath" class="fa fa-facebook" target="_blank"></a>
        <a href="https://www.instagram.com/jonedis_osteo/" class="fa fa-instagram" target="_blank"></a>
        </div>
        </p>
        <div class="main-header">
        <a class="no-hover" href="../index.html">
        <img class="logo" src="../logos/je-logo.gif" alt="Jonathan Edis Logo">
        <h1>JONATHAN EDIS OSTEOPATH</h1>
        <h3>BSc, PGCAP, FHEA</h3>
        <h2>Osteopathy & Osteopathic Lecturing</h2>
        </a>
        <ul class="menu" id="myTopnav">
        <li class="menu-item"><a href="../index.html">Home</a></li>
        <li class="menu-item"><a href="osteopathy-greenwich.html">Osteopathy in Greenwich</a></li>
        <li class="menu-item"><a href="osteopathic-lecturing.html">Osteopathic Lecturing</a></li>
        
        <li class="menu-item"><a href="gallery.html">Gallery</a></li>
        
        <li class="menu-item"><a href="contact.html">Contact Details</a></li>
        <li class="menu-item">
          <script id='setmore_script' type='text/javascript' src='https://storage.googleapis.com/fullintegration-live/webComponentAppListing/Container/setmoreIframeLive.js'></script><a target="_blank" style='float:none;' id='Setmore_button_iframe' href='https://booking.setmore.com/scheduleappointment/eee6e26f-97d1-405b-9ec0-1b5009d370aa'><img border='none' src='https://storage.googleapis.com/full-assets/setmore/images/1.0/Settings/book-now-blue.svg' alt='Click here to book the appointment using setmore' /></a>
        </li>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
      </ul>
        </div>

      </header>
    `;
  }
}

customElements.define('header-component', Header);