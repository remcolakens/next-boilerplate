# Remco's Next.js Boilerplate

> Easy to use front-end boilerplate to start developing your Next.js application right away 💯

[**Learn More**](#learn-more)

---

## Highlights

- Features all of the benefits of Next.js
- Uses Emotion for CSS-in-JS
- Typescript support
- Blazing fast package manager
- Lint your code with `husky` & `lint-staged`
- Normalizes default browser styles
- Automatically formats your code by using `Prettier`
- JavaScript Testing Framework
- Friendly errors & warnings
- Automated releases with `semantic-release` and `Github Actions`
- Includes Tailwind CSS & shadcn/ui to quickly build user-friendly interfaces
- Automatically optimizes all your SVGs

## File Tree

```bash
├── __tests__                 # Test folder
│   └── utils                 # Utils folder for tests
│       └── index.tsx         # Main file for the test utils
│   └── index.test.tsx        # Sample test file
├── .github                   # Workflows for Github Actions
├── .husky                    # Git hooks
├── components                # Component folder
│   └── atoms                 # Atoms (e.g. <a>, <h1>)
│   └── molecules             # Molecules  (e.g. wrappers, combined atoms)
│   └── organisms             # Organisms (e.g. carousels, content blocks)
├── docs                      # Documentation
│   └── CHANGELOG.md          # the changelog
│   └── ci.md                 # docs for CI
│   └── commit-convention.md  # docs for commit convention
├── pages                     # Pages folder
│   ├── _app.tsx              # Main page file
│   └── index.tsx             # Sample index page
├── public                    # Folder for static assets
│   └── favicon               # Favicon - https://realfavicongenerator.net/
├── styles                    # Style folder
│   └── components            # Styles for the custom components
│       └── buttonStyles      # Example file for custom button styles
│   └── global.ts             # global styles
│   └── themes.ts             # Themes
├── svgs                      # SVG folder
│   └── @generated            # the folder for the generated SVGs
│   └── cat.svg               # Example svg
├── types                     # Types folder
│   └── index.d.ts            # Your default project Typescript declaration file
├── .editorconfig             # Config to normalize editors
├── .env.example              # Example file with required .env variables
├── .eslintrc.json            # Eslint config
├── .gitignore                # Files that will be ignored by git
├── .lintstagedrc.js          # Config file for "lint-staged" (package)
├── .nvmrc                    # Compatible node version
├── .prettierignore           # Files that will be ignored by Prettier (package)
├── .priettierc               # Prettier config (package)
├── .releaserc                # semantic-release config
├──  commitlint.config.js     # commitlint config (package)
├──  jest.config.js           # Config file for jest
├──  jest.setup.js            # Used for __tests__/testing-library.js
├──  next-env.d.ts            # Next.js Typescript declaration file (leave unchanged)
├──  next.config.js           # the next.js config
├──  package.json             # The package.json of this project
├──  README.md                # README documentation
├──  tsconfig.json            # Typescript config
└──  pnpm-lock.yaml           # Lock file for packages (leave unchanged)
```

## Usage

For new projects you should be using [pnpm](https://pnpm.io/) as your package manager.
It has some advantages over yarn and npm but it's main purpose is to be a fast and disk space efficient.

If you are new to pnpm you need to [install it on your local machine](https://pnpm.io/installation), afterwards you can follow the instructions below.

```bash
# Install dependencies

pnpm install

# Start local webserver at port 3000

pnpm dev

# Run linters

pnpm lint

# Run unit tests

pnpm test

# Build app for production (gets output in the 'dist' directory)

pnpm build
```

## Learn More

To learn more about Next.js and the other tools, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Typescript](https://www.typescriptlang.org/docs) - Introduction to TypeScript
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- [Emotion](https://emotion.sh/docs) - Use the best bits of ES6 and CSS to style your apps without stress
- [Eslint](https://eslint.org/docs/user-guide) - Find and fix problems in your JavaScript code.
- [Prettier](https://prettier.io/docs/en/index.html) - Prettier is an opinionated code formatter.
- [Jest](https://jestjs.io/docs/getting-started) - Jest is a delightful JavaScript Testing Framework with a focus on
  simplicity.
- [React Testing Library](https://testing-library.com/docs/) - Simple and complete testing utilities that encourage good
  testing practices
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) - A specification for adding human and machine readable meaning to commit messages
- [semantic-release](https://github.com/semantic-release/semantic-release) - Fully automated version management and package publishing

## Deploy

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/remcolakens/next-boilerplate)

## Documentation

- [CHANGELOG](/docs/CHANGELOG.md) - Changelog with all notable changes made to a project
- [CI](/docs/ci.md) - Short explanation of the continuous integration process
- [Commit Convention](/docs/commit-convention.md) - Short introduction of the commit convention

## Todo

- [x] Write README.md
- [x] Add UI Library e.g. Chakra UI
- [x] Add React Testing Library
- [x] Add automated releases
- [ ] Add more examples

## License

[MIT](/LICENSE)
