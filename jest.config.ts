import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  cache: false,
  verbose: true,
  clearMocks: true,
  moduleFileExtensions: ["ts", "js", "json", "html"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["node_modules"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "<rootDir>/src/__mocks__/styleMock.js",
  },
  moduleNameMapper: {
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^#(.*)$": "<rootDir>/src/$1",
  },
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
};

export default config;
