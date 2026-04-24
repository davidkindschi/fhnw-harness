import { slugify } from './utils';

test('slugify converts spaces to hyphens', () => {
  expect(slugify('hello world')).toBe('hello-world');
});
