## Getting Started

First, install dependencies:

```bash
yarn
```


Second, run the development server:

```bash
docker-compose up -d 
```

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Styles
- [Tailwind](https://tailwindcss.com/)
- [Shadcn](https://ui.shadcn.com/): Re-usable components built using Radix UI and Tailwind CSS.


## Others
- [Prisma](https://www.prisma.io/): Database ORM.
- [Zod](https://zod.dev/): Schema validation.
- [Prettier plugin sort imports](https://github.com/IanVS/prettier-plugin-sort-imports): An opinionated but flexible prettier plugin to sort import statements.
- [Husky](https://github.com/typicode/husky): Modern native Git hooks made easy.
- [Commitlint](https://github.com/conventional-changelog/commitlint): Lint commit messages.
- [Jest](https://jestjs.io/): Testing framework.
- [Testing Library](https://testing-library.com/): Simple and complete testing utilities that encourage good testing practices.
- [Faker](https://fakerjs.dev/): Generate massive amounts of fake (but realistic) data for testing and development.
- [Eslint](https://eslint.org/): Linting utility.
- [Prettier](https://prettier.io/): Code formatter.

## Faq

- ### Useful commands
    - `yarn db:pull`
        - Pull the database from the server
    - `yarn db:push`
        - Push the database to the server
    - `yarn db:generate`
        - Generate the types in node_modules
    - `yarn db:migrate`
        - Create the tables in the database
    - `yarn prisma db seed`
        - Seed the database
    - `yarn db:reset --skip-seed`
        - Reset the database (also resets the identities) without seed
    - `yarn db:reset`
        - Reset the database (also resets the identities) with seed
    - `yarn lint`
        - Lint the code
    - `yarn lint:fix`
        - Lint the code and fix the errors
    - `yarn typecheck`
        - Check the types
    - `yarn format:write`
        - Format the code
    - `yarn format:check`
        - Check the format of the code
    - `yarn test`
        - Run the tests
- ### First installation?
    * [Install nvm](https://github.com/nvm-sh/nvm#installing-and-updating) or [install node 18.17.0 LTS](https://nodejs.org/es/download/)
    * [Install yarn](https://classic.yarnpkg.com/lang/en/docs/install/) 
    * [Install vscode prisma extension](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma).
    * [Install Docker](https://www.docker.com/products/docker-desktop/).
    * Copy the file .env.example to .env and replace the values.
    * `yarn db:generate` to generate the types in node_modules
    * `yarn db:migrate` to create the tables in the database
    * `npm install -g ts-node` to install ts-node globally and to be able to seed the database
    * Seed DB: `yarn prisma db seed` or `yarn db:reset`



- ### How do I make a change to the database with Prisma?
    - I make the change to the schema.prisma file
    - Then run the command `yarn db:migrate`, optional: `[--name optionalName] [--skip-seed]`

## Contributions


See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

## Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

References:

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html