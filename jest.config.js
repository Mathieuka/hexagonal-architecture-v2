module.exports = {
  transform: {
    "^.+\\.ts$": ["ts-jest"],
  },
  moduleNameMapper: {
    "^@domain/(.*)$": "domain/$1",
    "^@infrastructure/(.*)$": "infrastructure/$1",
  },
  moduleDirectories: ["<rootDir>", "node_modules"],
  setupFilesAfterEnv: ["./setup-jest.ts"],
};
