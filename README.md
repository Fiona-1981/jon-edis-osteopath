# Jonathan Edis Osteopath

Website for Jonathan Edis, a registered osteopath offering osteopathy in Greenwich, London, and teaching osteopathy around the world.

**Live site:** https://jonedisosteopath.com

<img width="702" alt="Screenshot of the Jonathan Edis Osteopath home page" src="https://github.com/Fiona-1981/jon-edis-osteopath/assets/82163486/f55ea12d-ee1e-49f7-bfd8-55100e216937">

## About the site

A small static site built with [Astro](https://astro.build). It was first hand-coded in HTML and CSS in 2023 and ported to Astro in 2026. Every page shares one layout, header and footer, and the build produces plain `.html` files at the same URLs as the original site (for example `/files/contact.html`).

It uses [Setmore](https://www.setmore.com/) for online booking (the "Book now" button), [Font Awesome 4.7](https://fontawesome.com/v4/) for icons, and a YouTube embed on the Osteopathic Lecturing page.

| Where | What |
| --- | --- |
| `src/pages/` | The pages: `index.astro` is the home page, the rest are in `files/` |
| `src/layouts/Layout.astro` | The shared `<head>`, with the header and footer around each page |
| `src/components/` | `Header.astro` and `Footer.astro` |
| `public/` | Files copied as-is into the site: images, `files/style.css` and `.htaccess` (redirects HTTP to HTTPS) |

## Run it locally

You'll need [Node.js](https://nodejs.org) 22.12 or later.

```sh
npm install      # first time only
npm run dev
```

Then open http://localhost:4321. The page reloads as you edit.

## Build

```sh
npm run build
```

This creates the finished site in `dist/`. To check the build before deploying, run `npm run preview`.

## Deploy

The site is hosted on cPanel.

1. Run `npm run build`.
2. Zip the **contents** of `dist/`, not the `dist` folder itself, so that `index.html` sits at the top level of the zip. From the command line:
   ```sh
   cd dist && zip -r ../site.zip . && cd ..
   ```
   `site.zip` is ignored by git.
3. In cPanel's **File Manager**, upload `site.zip` to `public_html` and **Extract** it there, replacing the existing files.

Make sure `.htaccess` ends up in `public_html`. It's a hidden file, so turn on **Settings → Show Hidden Files** in File Manager to see it.

Extracting only adds and replaces files. If a file is removed from the site, delete it from `public_html` by hand.

## Credits

Website by Fiona Wiggins ([hello@handmadebywiggins.co.uk](mailto:hello@handmadebywiggins.co.uk)).
Content, photographs and branding © Jonathan Edis.
