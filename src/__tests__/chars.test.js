import chars from '../index'

test('The healthiest guy', () => {
    expect(100).toEqual(chars[0].health);
});
test('Just a scratch', () => {
    expect(80).toEqual(chars[1].health);
});
test('Call a doctor!', () => {
    expect(10).toEqual(chars[2].health);
})
