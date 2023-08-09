class Footer extends HTMLElement {
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
      </style>
      <footer>
      <a href="https://www.facebook.com/jonathanedisosteopath" class="fa fa-facebook" target="_blank"></a>
      <a href="https://www.instagram.com/jonedis_osteo/" class="fa fa-instagram" target="_blank"></a>
      <div>
        <p>Copyright Jonathan Edis 2023</p>
        <img src="../logos/registered-mark-4616.jpeg" alt="I am registered with the General Osteopathic Council.">
        <p>Website hand made by Fiona Wiggins</p>
      </div>
    </footer>
    `;
  }
}

customElements.define('footer-component', Footer);