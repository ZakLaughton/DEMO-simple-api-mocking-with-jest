const funcs = require("./index");
const axios = require("axios");

jest.mock("axios");
describe("Testing axios mock methoods", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("returns the title of the first album", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          userId: 1,
          id: 1,
          title: "My First Album",
        },
        {
          userId: 1,
          id: 2,
          title: "Album: The Sequel",
        },
      ],
    });
    const url = "https://jsonplaceholder.typicode.com/albums";
    const res = await funcs.getAlbum(url);
    const title = res.data[0].title;
    expect(title).toEqual("My First Album");
  });

  it("Wrong URL does not return the title of the first album", async () => {
    axios.get.mockResolvedValue({
      error: {
        message: "Request failed with status code 404",
      },
    });

    try {
      const url = "https://jsonplaceholder.typicode.com/albums";
      await funcs.getAlbum(url);
    } catch (err) {
      expect(err.message).toEqual("Request failed with status code 404");
    }
  });

  it("Missing URL does not return the title of the first album", async () => {
    axios.get.mockResolvedValue({
      error: {
        message: "Network Error",
      },
    });
    try {
      const url = "";
      await funcs.getAlbum(url);
    } catch (err) {
      expect(err.message).toEqual("Network Error");
    }
  });

  it("Missing POST method", async () => {
    //axios.post.mockResolvedValue({});
    try {
      const url = "https://jsonplaceholder.typicode.com/albums";
      const res = await funcs.postAlbum(url);
      expect(res).not.toBeDefined();
    } catch (err) {
      console.log(`err: ${err}`);
    }
  });

  it("POST method", async () => {
    axios.post.mockResolvedValue({
      status: 201,
    });
    try {
      const url = "https://jsonplaceholder.typicode.com/albums";
      const res = await funcs.postAlbum(url);
      expect(res.status).toEqual(201);
    } catch (err) {
      console.log(`err: ${err}`);
    }
  });
});
