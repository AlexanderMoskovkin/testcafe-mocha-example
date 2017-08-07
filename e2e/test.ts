import { Selector } from 'testcafe'

import { User } from '../src/types'

fixture`TestCafe fixture`.page`http://example.com`

test('TestCafe test', async t => {
  await t.wait(1000)
})

test(`should be a user like Jon Snow`, async t => {
  const user: User = {
    age: 30,
    email: 'jon@snow.got',
    name: 'Jon',
    hobbies: ['dying', 'arguing with khalesi', 'knowing nothing'],
  }

  await t.wait(1000)
})
