## Multi-Tenant GraphQL API - ReadMe
## Overview
This project is a multi-tenant GraphQL API that allows you to create and retrieve user data based on the specified tenant. Each tenant has its own dedicated database schema, providing data isolation and security.

## Features
Multi-Tenancy: The application creates separate database schemas for each tenant, ensuring data isolation.

GraphQL API: Provides GraphQL endpoints for creating and retrieving user data.

Data Security: Implements row-level security and authorization checks to ensure tenants can only access their own data.

## Getting Started
## Prerequisites
Node.js and npm installed
Docker installed


## Installation
1. Clone the repository:

```bash
git clone https://github.com/Syednoor95/multi-tenancy.git
cd multi-tenant-graphql-api
```

2. Install dependencies:

```bash
npm install
```
3. Start docker

```bash
# Start docker
$ docker compose up -d
```

4. watch mode

```bash
# watch mode
$ npm run start:dev
```

## Usage
## GraphQL Mutations

Create User:
Use the following GraphQL mutation to create a new user:

```bash
mutation {
  createUser(input: {
    firstName: "John12"
    lastName: "Doe"
    email: "john12.doe@example.com"
    mobile: "1234567890"
    isActive: true
  }) {
    id
    firstName
    lastName
    email
    mobile
    isActive
  }
}
```
Replace the sample data with the user details you want to create.
The tenant_id is determined from the request headers, ensuring the user is created in the appropriate schema.

## GraphQL Queries

Get All Users:
Use the following GraphQL query to retrieve all users:

```bash
query {
  getAllUsers {
    id
    firstName
  }
}
```
This query fetches all users' IDs and first names from the specified tenant's schema.