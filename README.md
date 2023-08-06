This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
##### _I am using pnpm._


First, install dependencies:

```bash
pnpm install
```

Second, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Styles
- [Tailwind](https://tailwindcss.com/)
- [Shadcn](https://ui.shadcn.com/): Re-usable components built using Radix UI and Tailwind CSS.
- [Prettier plugin sort imports](@ianvs/prettier-plugin-sort-imports): An opinionated but flexible prettier plugin to sort import statements.

## Others
- ORM: [Prisma](https://www.prisma.io/)
- Schema validation: [Zod](https://zod.dev/)

## Faq

- ### First installation?
    * [Install nvm](https://github.com/nvm-sh/nvm#installing-and-updating) or [install node 18.17.0 LTS](https://nodejs.org/es/download/)
    * [Install pnpm](https://pnpm.io/installation) 
    * [Install vscode prisma extension](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma).
    * Copy the file .env.example to .env and replace the values.
    * _"pnpm db:generate"_ to generate the types in node_modules
    * _"pnpm db:migrate"_ to create the tables in the database
    * _"npm install -g ts-node"_ to install ts-node globally and to be able to seed the database
    * Seed DB: _"pnpm prisma db seed"_ or _"pnpm db:reset"_

- ### Useful commands
    - pnpm db:pull
        - Pull the database from the server
    - pnpm db:push
        - Push the database to the server
    - pnpm db:generate
        - Generate the types in node_modules
    - pnpm db:migrate
        - Create the tables in the database
    - pnpm prisma db seed
        - Seed the database
    - pnpm db:reset --skip-seed
        - Reset the database (also resets the identities) without seed
    - pnpm db:reset
        - Reset the database (also resets the identities) with seed
    - pnpm lint
        - Lint the code
    - pnpm lint:fix
        - Lint the code and fix the errors
    - pnpm typecheck
        - Check the types
    - pnpm format:write
        - Format the code
    - pnpm format:check
        - Check the format of the code