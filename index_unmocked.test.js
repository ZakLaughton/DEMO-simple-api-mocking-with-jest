const getFirstAlbumTitle = require('./index');

it('returns the title of the first album', async () => {
  const title = await getFirstAlbumTitle();
  expect(title).toEqual('quidem molestiae enim');
});
