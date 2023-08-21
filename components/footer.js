class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        a {
          text-decoration: none;
          color:gray;
        }
      
        a:hover {
          opacity: 0.6;
        } 

        .fa {
          font-size: 15px;
          width: 20px;
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

        footer {
          padding: 50px;
        }
      </style>
      <footer>
      <ul class="menu">
        <li class="menu-item"><a href="../index.html">Back to home</a></li>
        <li class="menu-item"><a href="osteopathy-greenwich.html">Osteopathy in Greenwich</a></li>
        <li class="menu-item"><a href="osteopathic-lecturing.html">Osteopathic Lecturing</a></li>
        <li class="menu-item"><a href="what-is.html">What is Osteopathy?</a></li>
        <li class="menu-item"><a href="gallery.html">Gallery</a></li>
        <li class="menu-item"><a href="about-me.html">About Me</a></li>
        <li class="menu-item"><a href="contact.html">Contact</a></li>
      </ul>
      <a href="https://www.facebook.com/jonathanedisosteopath" class="fa fa-facebook" target="_blank"></a>
      <a href="https://www.instagram.com/jonedis_osteo/" class="fa fa-instagram" target="_blank"></a>
      <div>
        <p>Copyright Jonathan Edis 2023</p>
        <a href="https://www.osteopathy.org.uk/register-search/registrants/5715-mr-jonathan-edis/" target="_blank"><img src="../logos/registered-mark-4616.jpeg" alt="I am registered with the General Osteopathic Council."></a>
        <p>
        <a href="mailto:hello@handmadebywiggins.co.uk">Website hand made by Fiona Wiggins</a>
        </p>
      </div>
    </footer>
    `;
  }
}

customElements.define('footer-component', Footer);