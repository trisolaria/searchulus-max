// Step 1: Install MSW
// npm install msw --save-dev

// Step 2: Create a mock data file (src/mocks/data.js)

// Step 3: Define your API handlers (src/mocks/handlers.js)
import { http, HttpResponse } from "msw";
import { users, projects } from "./data";

export const handlers = [
  // GET all users
  http.get("*/api/users", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");

    return HttpResponse.json(
      users.filter(({ name }) => {
        return q && name.toLowerCase().includes(q);
      }),
    );
  }),

  // GET user by ID
  http.get("*/api/users/:id", ({ params }) => {
    const { id } = params;
    const user = users.find((user) => user.id === Number(id));

    if (!user) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(user);
  }),

  // GET all projects
  http.get("*/api/projects", () => {
    return HttpResponse.json(projects);
  }),

  // GET projects for a specific user
  http.get("*/api/users/:id/projects", ({ params }) => {
    const { id } = params;
    const userProjects = projects.filter(
      (project) => project.ownerId === Number(id),
    );

    return HttpResponse.json(userProjects);
  }),
];
