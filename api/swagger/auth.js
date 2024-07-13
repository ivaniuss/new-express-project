import { responses } from "./responses.js";
export const auth = {
  "/auth/signup": {
    post: {
      summary: "Account creation",
      tags: ["Auth"],
      responses,
      security: [],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                username: {
                  type: "string",
                  description: "Username",
                  default: "username",
                },
                password: {
                  type: "string",
                  description: "Account password",
                  default: "********",
                },
              },
            },
          },
        },
      },
    },
  },
  "/auth/login": {
    post: {
      summary: "Account verification",
      tags: ["Auth"],
      responses,
      security: [],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                username: {
                  type: "string",
                  description: "Username",
                  default: "username",
                },
                password: {
                  type: "string",
                  description: "Account password",
                  default: "********",
                },
              },
            },
          },
        },
      },
    },
  },
}