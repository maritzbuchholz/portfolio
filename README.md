# Portfolio

Personal portfolio site for Maritz Buchholz, a full-stack developer. It's a single-page site with About, Stack, Featured Work and Contact sections, plus a navbar that highlights the section you're currently viewing.

## Built With

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Sass](https://sass-lang.com/)
- ESLint

## Getting Started

**Prerequisites:** Node.js 18 or newer and npm.

```bash
# Clone the repository
git clone https://github.com/maritzbuchholz/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site runs at `http://localhost:5173` by default.

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR  |
| `npm run build`   | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                          |

## Project Structure

```
src/
├── Components/   # Hero, NavBar, About, Stack, Featured, Contact, Footer, etc.
├── pages/        # LandingPage
├── styles/       # Global Sass styles
├── assets/       # Images and static assets
├── App.jsx       # Routes
└── main.jsx      # Entry point
```

## Featured Projects

| Project   | Description                                         | Links |
| --------- | --------------------------------------------------- | ----- |
| Stare     | Band website with merchant capabilities             | [Live](https://starenyhc.netlify.app/) · [Repo](https://github.com/maritzbuchholz/stare-server) |
| Instock   | Team built inventory management system              | [Live](https://instock-maritz.netlify.app/) · [Repo](https://github.com/maritzbuchholz/instock-server) |
| Metalnome | Metronome for metalheads with mobile functionality  | [Live](https://met6lnome.netlify.app/) · [Repo](https://github.com/maritzbuchholz/Metalnome) |
| LoveBug   | Team built frontend wireframe of a relationship app | [Live](https://lovebug26.netlify.app/) · [Repo](https://github.com/maritzbuchholz/lovebug-client) |

## Deployment

Run `npm run build` and deploy the generated `dist/` folder to any static host (e.g. Netlify).
