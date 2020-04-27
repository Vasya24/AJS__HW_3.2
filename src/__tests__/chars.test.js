import chars from '../index'

for (let i=0; i<chars.length; i++) {
    test('The most healthier', () => {
    expect(chars[i].health).toEqual(100);
    i=0
    });
    test('Just a scratch', () => {
    expect(chars[i].health).toEqual(80);
    i=1
    });
    test('Call a doctor!', () => {
    expect(chars[i].health).toEqual(10);
    i=2
    })
    }
