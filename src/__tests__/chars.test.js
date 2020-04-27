import chars from '../index'

for (let i=0; i<chars.length; i++) {
    test('The healthiest guy', () => {
    expect(chars[1].health).toEqual(100);
    i = 0
    });
    test('Just a scratch', () => {
    expect(chars[2].health).toEqual(80);
    i = 1
    });
    test('Call a doctor!', () => {
    expect(chars[0].health).toEqual(10);
    i=2
    })
}