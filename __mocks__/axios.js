const axios = jest.genMockFromModule('axios');

const throwUnmockedError = () => {
  throw new Error(`This endpoint has been mocked, but hasn't been given a manual response`);
};

// Make all axios methods return the unmocked error
// List of axios methods taken from README at https://github.com/axios/axios
axios.post = axios.request = axios.get = axios.delete = axios.head = axios.options = axios.post = axios.put = axios.patch = throwUnmockedError;

module.exports = axios;
