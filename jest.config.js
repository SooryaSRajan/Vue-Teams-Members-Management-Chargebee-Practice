module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
  },
};
