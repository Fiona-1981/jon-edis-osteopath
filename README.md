# Jonathan Edis Osteopath

Website for Jonathan Edis, a registered osteopath offering osteopathy in Greenwich, London, and teaching osteopathy around the world.

**Live site:** https://jonedisosteopath.com

<img width="702" alt="Screenshot of the Jonathan Edis Osteopath home page" src="https://github.com/Fiona-1981/jon-edis-osteopath/assets/82163486/f55ea12d-ee1e-49f7-bfd8-55100e216937">

## About the project

This is a static site written in plain HTML, CSS and a little vanilla JavaScript. It has no framework, no build step and no dependencies to install. It was hand built by [Fiona Wiggins](mailto:hello@handmadebywiggins.co.uk) and launched in November 2023.

The site uses these external services:

- **[Setmore](https://www.setmore.com/)** for online appointment booking (the "Book now" button)
- **[Font Awesome 4.7](https://fontawesome.com/v4/)** from cdnjs, for the Facebook, Instagram and menu icons
- **Google Maps** and **YouTube** embeds on the Contact and Osteopathic Lecturing pages

## Pages

| Page | File | In the menu? |
| --- | --- | --- |
| Home | `index.html` | Yes |
| Osteopathy in Greenwich | `files/osteopathy-greenwich.html` | Yes |
| Osteopathic Lecturing | `files/osteopathic-lecturing.html` | Yes |
| Gallery | `files/gallery.html` | Yes |
| Contact | `files/contact.html` | Yes |
| What is Osteopathy? | `files/what-is.html` | No, the link is commented out on the home page |
| About Me | `files/about-me.html` | No, the link is commented out on the home page |
| Contact (experiment) | `files/contact-experiment.html` | No, used for testing layout changes |

## Project structure

```
index.html            Home page
files/                All other pages, plus style.css (shared styles)
components/
  header.js           <header-component>: contact bar, logo, main menu and Book Now button
  footer.js           <footer-component>: menu, social links, copyright and GOsC registration mark
images/               Photos, favicon and general images
logos/                Site logo and General Osteopathic Council marks
client-logos/         Logos of organisations Jon has lectured for
lecturing-images/     Photos for the Gallery page
```

### Shared header and footer

Every page in `files/` loads `components/header.js` and `components/footer.js` and uses the `<header-component>` and `<footer-component>` custom elements, so the header, menu and footer only need changing in one place.

A few things to keep in mind:

- **The home page is the exception.** `index.html` has its own copy of the header written inline, but still uses `<footer-component>`. If you change the menu or contact details, update both `components/header.js` **and** `index.html`.
- **The links in the components are relative to `files/`.** For example, they use `../index.html` and `../logos/...`. This works for pages inside `files/`. Any new page should also go in that folder.
- **The mobile menu** (the hamburger icon under 600px wide) is toggled by a small `myFunction()` script at the bottom of each page.

## Running locally

Because there's no build step, you can open `index.html` in a browser. Serving the site is still better, so that relative paths and the custom elements behave as they do in production. Either of these works:

- **VS Code:** use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension. The workspace is set to port 5501 in `.vscode/settings.json`, so the site runs at http://127.0.0.1:5501.
- **Command line:** from the repository root, run
  ```sh
  python3 -m http.server 5501
  ```
  then go to http://localhost:5501.

## Common updates

- **Prices:** edit `files/contact.html`.
- **Page text:** edit the relevant HTML file in `files/`.
- **Phone number, email or menu links:** edit `components/header.js` and the inline header in `index.html` (see above). Also check `components/footer.js`.
- **Gallery photos:** add the image to `lecturing-images/`, then add a `<figure>` for it in `files/gallery.html`.
- **Client logos:** add the logo to `client-logos/` and reference it from `files/osteopathic-lecturing.html`.
- **Styling:** all shared styles are in `files/style.css`. The header and footer components also carry a small amount of their own CSS.

## Credits

Website by Fiona Wiggins ([hello@handmadebywiggins.co.uk](mailto:hello@handmadebywiggins.co.uk)).
Content, photographs and branding © Jonathan Edis.
