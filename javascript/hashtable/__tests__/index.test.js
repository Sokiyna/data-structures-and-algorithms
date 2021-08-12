const Hashmap =require('../index').Hashmap;


describe('Hashtable test ...', () => {
  let hash = new Hashmap(4000);
  it('Adding a key/value to your hashtable results in the value being in the data structure ', () => {
    hash.add('Sokiyna','97');
    expect(hash.contains('Sokiyna')).toBe(true);
  });
  it('Retrieving based on a key returns the value stored ', () => {
    expect(hash.get('Sokiyna')).toEqual(["97"]);
  });
  it('Successfully returns null for a key that does not exist in the hashtable ', () => {
    expect(hash.get('Sokiynaz')).toBe(null);
  });
  it('Successfully handle a collision within the hashtable ', () => {
    expect(hash.add('amor','93')).toBe('93');
  })
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision ', () => {
    hash.add('aomr','37');
    expect(hash.get('Sokiyna')).toEqual(["97"]);
  });
  test('Successfully hash a key to an in-range value ', () => {
    expect(hash.hash('Sokiyna')).toBe(189);
  })
  
})
