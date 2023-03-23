// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  // dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run

  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/domain/services/(.*)$": "<rootDir>/../../../domain/services/$1",
    "^@/infrastructure/repositories/(.*)$":
      "<rootDir>/../../../infrastructure/repositories/$1",
    "^@/infrastructure/instances/(.*)$":
      "<rootDir>/../../../infrastructure/instances/$1",
    "^@/infrastructure/view/(.*)$": "<rootDir>../../../infrastructure/view/$1",
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
