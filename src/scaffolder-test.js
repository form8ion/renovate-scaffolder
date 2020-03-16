import scaffold from './scaffolder';

suite('scaffolder', () => {
  test('that renovate gets scaffolded', async () => {
    await scaffold();
  });
});
