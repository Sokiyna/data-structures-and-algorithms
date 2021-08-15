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
    expect(hash.get('Sokiyna')).toBe(null);
  });
  it('Successfully handle a collision within the hashtable ', () => {
    expect(hash.add('lolo','93')).toBe('93');
  })
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision ', () => {
    hash.add('lolo','37');
    expect(hash.get('Sokiyna')).toEqual(["97"]);
  });
  test('Successfully hash a key to an in-range value ', () => {
    expect(hash.hash('Sokiyna')).toBe(189);
  })
  
})


describe('test repeated word', () => {

  test('Repeated word 1', () => {
    let test = '';

    expect(repeatedWord(test)).toBe('cannot find words in an empty string');

  })
  test('Repeated word 2', () => {

    let test = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
    expect(repeatedWord(test)).toBe('it');

  })
  
  test('Repeated word 3', () => {

    let test = 'some string with no repeated words';
    expect(repeatedWord(test)).toBe('cannot find words in an empty string');
    
  })
})