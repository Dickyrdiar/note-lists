export default {
  preset: 'vite-jest',
  testEnvironment: 'jsdom',

  testPathIgnorePatterns: [
    '/node_modules',
  ],

  testMatch: [
    '**/*.test.js'
  ],

  setupFilesAfterEnv: [
    './src/__setup__/setupTests.js',
  ],
}
