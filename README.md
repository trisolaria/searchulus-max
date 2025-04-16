# Searchulus

A lightweight React search interface.

## Overview

Strata Search demonstrates fundamental React concepts through a simple search interface. Candidates can showcase their skills in:
- Component development
- API integration
- State management
- Testing practices

## Installation

In order to install the application, first checkout this repository and in the application root, run `npm install` and the `npm run dev` to start a server. The application should be running on [https:/localhost:5173](https:/localhost:5173). This will start a Vite dev environment and should enable Hot Module Reloading.

## The Problem

We need a simple search interface that allows users to search through our database of action heroes and their projects. Your task is to:

1. Enhance the SearchBox component to make API requests to the mock endpoint when users type in the search field
2. Display search results in a clean, readable format showing relevant user information
3. Implement a details view that shows more information about a selected user, including their associated projects
4. Add proper error handling for failed requests and empty results
5. Include loading states to improve user experience during API requests

Your solution should demonstrate best practices in React development including proper state management, component composition, and performance considerations. The interface should be intuitive and responsive.
Feel free to add tests, styling, addtitional libraries, or update the mock API as needed to showcase your skills and approach to frontend development.

## Available API Endpoints

- `GET /api/users?q={query}` - Search users by name
- `GET /api/users/{id}` - Get user details
- `GET /api/projects` - Get all projects
- `GET /api/users/{id}/projects` - Get projects for a specific user

## Project Structure

- `src/components/search-box.tsx` - Main search component to be enhanced
- `src/mocks/` - MSW setup for API mocking
- `src/mocks/data.ts` - Mock data (users and projects)
- `src/mocks/handlers.ts` - API route definitions

## Testing

This application uses Vite to test, which is a drop in replacement for Jest. You are welcome to install other test frameworks if you feel it's easier, but this is ready to go.

[MSW](https://mswjs.io) is used to create a test API, both in the browser and tests. Any API requests using `fetch` should be intercepted.
