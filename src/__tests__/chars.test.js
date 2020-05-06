import { chars, sorting, healthCheck } from '../index'

healthCheck()

test('The healthiest guy', () => {
    expect(chars[0].health).toEqual(100);
})

test('Just a scratch', () => {
expect(chars[1].health).toEqual(80);
})

test('Call a doctor!', () =>{
expect(chars[2].health).toEqual(10);
})