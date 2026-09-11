# Rakshith Client Portfolio

A modern, client-focused React + Vite portfolio designed to sell freelance web development services.

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

## 3. Build for production

```bash
npm run build
```

## 4. Customize before publishing

Open `src/main.jsx` and update:

- Your email
- Your WhatsApp number
- GitHub URL
- LinkedIn URL
- Live project URLs
- Project descriptions
- Skills
- Project video paths

### Adding project videos

Put `.mp4` files in:

`public/videos/`

Then use:

```js
video: "/videos/your-file.mp4"
```

The project card will show a play button and open the video in a modal.

### Replacing project visuals

The current project cards use stylish CSS mockups so the site works immediately.
You can later replace them with screenshots by adding an image field to each project and using `<img>` in the project visual.

## Suggested deployment

- GitHub
- Vercel
- Netlify
- GitHub Pages

## Important

Before sending this portfolio to clients, replace all `YOUR_...` placeholders and all `#` project URLs.
