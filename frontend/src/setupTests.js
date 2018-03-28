/* global jest */
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
  token: jest.fn(),
};
global.localStorage = localStorageMock;
