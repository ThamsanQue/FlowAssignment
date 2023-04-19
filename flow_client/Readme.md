Flow Living

An application used to filter listings based on real estate agents, built with React, React Query, TypeScript, and CSS.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm run dev`

To Visit App:

`http://127.0.0.1:5173/`

## Reflection

This was a 2 day project built for Flow Living as a take home coding assignment.

## Project Goals:

Your data is to be taken from the following datasets in JSON format:

1. Set of property listings :
   `http://example/listings.json`
2. Set of Agent data records :
   `http://example/agents.json`
   You will need to:
3. Create a NoSQL database instance (preferably a free hosted MongoDB cloud instance)
4. Insert the data into the database for querying
5. Create a hosted Node.js or NestJS API interface with the following endpoints:
   a. /agents - to return an array of DISTINCT agents from all the listing data provided
   (Hint, agents are referenced by “agent” on the listing object)
   b. /listings - to return a list of properties that belong to a specific agent with the
   querystring parameter of “agentId” passed to it

6. Create a simple web interface to display a single listing, you can use the following Flow
   pages as reference for how this is currently shown:
   a.`http://example/listings/residential1`
   b. `http://example/listings/residential2`

Since this was an assignment with minimal functionality, i decided to use React without a Framework. I started this process by using the `npm create vite@latest`to scaffold a React starter project it takes literally 1ms to get a React starter up and running plus its super lightweight compared to `create-react-app`, then i added `react-router-dom@latest` and `react-query` for lightweight powerful asynchronous state management. For styling i used `tailwindcss` a utility-first CSS framework. And lastly to validate my api calls i used `zod` a runtime TypeScript-first schema validation with static type inference. This combination is the Ferrari 🏎️😂 of Client side development, works like a breeze and it scales well too for larger projects.

On the server side i decided to use `@nestjs` a Nodejs server-side framework for the first time to challenge myself. I normally use `TRPC` combined with `Nextjs` for my fullstack TypeScript solutions but turns out nestjs is also fun!. Lastly `MongoDB` for the Database, i bulk added the data to mongodb via nestjs.

Enjoyed the challenge 🔥.
