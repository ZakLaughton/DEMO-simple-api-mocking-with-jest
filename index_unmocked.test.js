const funcs = require("./index");
describe("Testing unmocked axios method", () => {
  jest.resetAllMocks();
  it("returns the title of the first album", async () => {
    const url = "https://jsonplaceholder.typicode.com/albums";
    const res = await funcs.getAlbum(url);
    const title = res.data[0].title;
    expect(title).toEqual("quidem molestiae enim");
  });

  it("Wrong URL does not return the title of the first album", async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/albumsZZZ";
      await funcs.getAlbum(url);
    } catch (err) {
      expect(err.message).toEqual("Request failed with status code 404");
    }
  });

  it("Missing URL does not return the title of the first album", async () => {
    try {
      const url = "";
      await funcs.getAlbum(url);
    } catch (err) {
      expect(err.message).toEqual("Network Error");
    }
  });

  it("Post album", async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/albums";
      const res = await funcs.postAlbum(url);
      expect(res.status).toEqual(201);
    } catch (err) {
      console.log(`error: ${err}`);
    }
  });
});
