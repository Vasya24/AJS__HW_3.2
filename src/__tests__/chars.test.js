import { chars, sorting } from '../index'

test('The healthiest guy', () => {
    expect(chars[0].health).toEqual(100);
})

test('Just a scratch', () => {
expect(chars[1].health).toBe(80);
})

test('Call a doctor!', () =>{
expect(chars[2].health).toBe(10);
})