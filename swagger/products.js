import { definitions } from "./definitions.js";

export const products = {
  "/products": {
    "get": {
      "tags": ["Products"],
      "summary": "Get all products",
      "responses": {
        "200": {
          "description": "List of products",
          "schema": {
            "type": "array",
            "items": { "$ref": "#/definitions/Product" }
          }
        }
      }
    },
    "post": {
        "tags": ["Products"],
        "summary": "Create a new product",
        "parameters": [
          {
            "name": "product",
            "in": "body",
            "description": "Product to create",
            "schema": { "$ref": "#/definitions/Product" }
          }
        ],
        "responses": {
          "201": {
            "description": "Product created",
            "schema": { "$ref": "#/definitions/Product" }
          }
        }
      },
    "post": {
      "tags": ["Products"],
      "summary": "Create a new product",
      "parameters": [
        {
          "name": "product",
          "in": "body",
          "description": "Product to create",
          "schema": { "$ref": "#/definitions/Product" }
        },
        {
          "name": "authorization",
          "in": "header",
          "required": true,
          "schema": {
            "type": "string"
          } 
        },
      ],
      "responses": {
        "201": {
          "description": "Product created",
          "schema": { "$ref": "#/definitions/Product" }
        }
      }
    }
  },
  "/products/{id}": {
    "get": {
      "tags": ["Products"],
      "summary": "Get a product by ID",
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "required": true,
          "type": "integer"
        }
      ],
      "responses": {
        "200": {
          "description": "Product details",
          "schema": { "$ref": "#/definitions/Product" }
        },
        "404": {
          "description": "Product not found"
        }
      }
    },
    "put": {
      "tags": ["Products"],
      "summary": "Update a product by ID",
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "required": true,
          "type": "integer"
        },
        {
          "name": "product",
          "in": "body",
          "description": "Product to update",
          "schema": { "$ref": "#/definitions/Product" }
        },
        {
          "name": "authorization",
          "in": "header",
          "required": true,
          "schema": {
            "type": "string"
          } 
        },
      ],
      "responses": {
        "200": {
          "description": "Product updated",
          "schema": { "$ref": "#/definitions/Product" }
        }
      }
    }
  },
  "/products/load-test-products": {
    "post": {
      "tags": ["Products"],
      "summary": "Load 50 test products",
      "responses": {
        "201": {
          "description": "Test products loaded"
        }
      }
    }
  },
  "/products/delete-all": {
    "delete": {
      "tags": ["Products"],
      "summary": "Delete all products",
      "responses": {
        "204": {
          "description": "All products deleted"
        }
      }
    }
  }
};
