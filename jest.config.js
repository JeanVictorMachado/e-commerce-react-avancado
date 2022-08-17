module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/stories/**/*.tsx',
    '!src/stories/*.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/styles/**/*.ts',
    '!src/utils/apollo.ts',
    '!src/graphql/queries/*.ts',
    '!src/utils/apolloCache.ts',
    '!src/types/**/*.d.ts',
    '!src/graphql/**/*.ts',
    '!src/**/mock.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
}
