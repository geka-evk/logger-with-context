# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Build**: `npm run build` - Uses tsup to build both CJS and ESM formats with type declarations
- **Test**: `npm test` - Runs Jest tests matching `**/test/**/*.test.ts` pattern
- **Lint**: `npm run lint` - Runs ESLint on all files
- **Lint Fix**: `npm run lint:fix` - Runs ESLint with auto-fix
- **Dev**: `npm run start:dev` - Runs TypeScript files directly with ts-node
- **Single Test**: `npm test -- --testNamePattern="test name"` or `npm test path/to/test.test.ts`

**Dependency Management:**
- `npm run dep:check` - Check for outdated dependencies
- `npm run dep:update` - Update dependencies to latest versions

## Project Architecture

This is a TypeScript library for contextual logging with the following structure:

### Core Components

- **Logger class** (`src/Logger.ts`): Main logger implementation with `fatal()` and `error()` methods
- **Type definitions** (`src/types.ts`):
  - `ILogger` interface defining the logger contract
  - `TMeta` type for metadata (currently supports JSON values)
  - `LogMethod` type for log method signatures
- **Main export** (`src/index.ts`): Default export of Logger class and all types

### Build Configuration

- **TypeScript**: Configured for NodeNext module resolution, strict mode enabled
- **Build tool**: tsup for dual CJS/ESM output with source maps and declarations
- **Test environment**: Jest with ts-jest preset and separate test TypeScript config
- **Code quality**: ESLint + Prettier with lint-staged pre-commit hooks

### Test Structure

Tests are located in `/test/` directory with `*.test.ts` naming convention. The project currently has a placeholder test structure.

## Development Notes

- The logger interface is incomplete (marked with TODO comment)
- Node.js version requirement: >=22
- Uses Husky for git hooks with commitlint for conventional commits
- Package is published to NPM with snapshot versioning support
