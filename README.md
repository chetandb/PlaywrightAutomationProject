## Playwright MCP Server

The Playwright Model Context Protocol (MCP) server enables advanced automation, remote control, and integration with tools that support the MCP protocol.

- Start the MCP server:
  ```sh
  npm run mcp-server
  ```

The server will start and listen for MCP client connections. See Playwright documentation for more details on MCP usage and integration.

# Playwright Automation Project

## Setup

1. Install Node.js and npm from [nodejs.org](https://nodejs.org/).
2. Install dependencies:
   ```sh
   npm install
   ```

## Running Tests

- Run all Playwright tests:
  ```sh
  npm test
  ```
- Run tests in headed mode:
  ```sh
  npm run test:headed
  ```
- Run tests in debug mode:
  ```sh
  npm run test:debug
  ```

## BDD (Cucumber) Tests

- Run Serenity/JS Cucumber BDD tests:
  ```sh
  npm run bdd
  ```

## Project Structure

- `tests/` - Playwright test files
- `features/` - Cucumber feature files and step definitions (for BDD)
- `utils/` - Utility helpers (if any)

All other folders and files have been removed for a minimal, maintainable setup.
