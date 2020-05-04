import { chars, sorting, healthCheck } from '../index'

healthCheck()

test('Check', () => {
    expect(chars[0].health).toEqual(100);
    expect(chars[1].health).toEqual(80);
    expect(chars[2].health).toEqual(10);
})
