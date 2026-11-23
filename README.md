# Muhammad Tahir — Portfolio

Personal portfolio of Muhammad Tahir, Senior MERN Stack Engineer. Live at [mtahir-dev.netlify.app](https://mtahir-dev.netlify.app).

Built with [Gatsby](https://www.gatsbyjs.com/) and [styled-components](https://styled-components.com/), hosted on [Netlify](https://www.netlify.com/).

## Credit

The design and original code are by [Brittany Chiang](https://brittanychiang.com), from her open-source [v4 portfolio](https://github.com/bchiang7/v4) (MIT License). All content (text, projects, experience and resume) is my own.

## Getting started

Requires Node.js 22.12 or newer (see `.nvmrc`).

```sh
yarn install
yarn develop     # dev server at http://localhost:8000
```

## Scripts

| Command        | Description                                  |
| -------------- | -------------------------------------------- |
| `yarn develop` | Start the development server                 |
| `yarn build`   | Build the production site into `public/`     |
| `yarn serve`   | Serve the production build locally (`:9000`) |
| `yarn clean`   | Clear Gatsby's cache                         |
| `yarn format`  | Format code with Prettier                    |

## Editing content

| What                       | Where                                  |
| -------------------------- | -------------------------------------- |
| Experience                 | `content/jobs/*/index.md`              |
| Featured projects          | `content/featured/*/index.md`          |
| Other projects             | `content/projects/*.md`                |
| Education & certifications | `src/components/sections/education.js` |
| Resume PDF                 | `static/resume.pdf`                    |
| Email, social links, nav   | `src/config.js`                        |

Set `showInProjects: false` on a project to show it only on the `/archive` page.
