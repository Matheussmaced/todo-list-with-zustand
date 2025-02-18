const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Caminho para o seu app Next.js
});

const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  preset: "ts-jest",
  transformIgnorePatterns: [
    "/node_modules/(?!lucide-react).+\\.js$" // Transforma o lucide-react
  ],
};

module.exports = createJestConfig(config);
