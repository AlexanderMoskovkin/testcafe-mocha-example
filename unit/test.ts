import { User } from '../src/types'

describe('Mocha', () => {
  it('Mocha test', () => {
    var a = false

    if (a) throw new Error('Never fails')
  })
  it(`should be a user like Jon Snow`, () => {
    const user: User = {
      age: 30,
      email: 'jon@snow.got',
      name: 'Jon',
      hobbies: ['dying', 'arguing with khalesi', 'knowing nothing'],
    }
  })
})
