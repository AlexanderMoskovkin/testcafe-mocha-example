import { User } from '../src/types'

describe('Mocha', () => {
  it('Mocha test', () => {
    const a = false

    expect(a).toBe(false)
  })
  it(`should be a user like Jon Snow`, () => {
    const user: User = {
      age: 30,
      email: 'jon@snow.got',
      name: 'Jon',
      hobbies: ['dying', 'arguing with khalesi', 'knowing nothing'],
    }
    expect(user).toHaveProperty('email')
  })
})
