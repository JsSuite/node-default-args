const defaultArguments = require("./default.arguments");

describe('default arguments test with normal function',() => {
  function combineNames (firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  it('should default first name', () => {
    const combineNamesFunc = defaultArguments(combineNames,{firstName: 'John'});
    const fullName = combineNamesFunc(undefined,'Cena')
    expect(fullName).toBe('John Cena');
  });
  it('should default last name', () => {
    const combineNamesFunc = defaultArguments(combineNames,{lastName: 'Buzova'});
    const fullName = combineNamesFunc('Olga')
    expect(fullName).toBe('Olga Buzova');
  });
  it('should default fullname', () => {
    const combineNamesFunc = defaultArguments(combineNames,{firstName: 'Alan',lastName: 'Walker'});
    const fullName = combineNamesFunc()
    expect(fullName).toBe('Alan Walker');
  });
  it('should not default fullname when params are passed', () => {
    const combineNamesFunc = defaultArguments(combineNames,{firstName: 'Alan',lastName: 'Walker'});
    const fullName = combineNamesFunc('Vera','Brezhneva')
    expect(fullName).not.toBe('Alan Walker');
    expect(fullName).toBe('Vera Brezhneva');
  });
  it('should not default fullname when object does not have arguments', () => {
    const combineNamesFunc = defaultArguments(combineNames,{fullName: 'Alan Walker'});
    const fullName = combineNamesFunc()
    expect(fullName).not.toBe('Alan Walker');
    expect(fullName).toBe('undefined undefined');
  });
})

describe('default arguments test with arrow function',() => {
  const combineNames = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
  }
  it('should default first name', () => {
    const combineNamesFunc = defaultArguments(combineNames,{firstName: 'John'});
    const fullName = combineNamesFunc(undefined,'Cena')
    expect(fullName).toBe('John Cena');
  });
  it('should default last name', () => {
    const combineNamesFunc = defaultArguments(combineNames,{lastName: 'Buzova'});
    const fullName = combineNamesFunc('Olga')
    expect(fullName).toBe('Olga Buzova');
  });
  it('should default fullname', () => {
    const combineNamesFunc = defaultArguments(combineNames,{firstName: 'Alan',lastName: 'Walker'});
    const fullName = combineNamesFunc()
    expect(fullName).toBe('Alan Walker');
  });
  it('should not default fullname when params are passed', () => {
    const combineNamesFunc = defaultArguments(combineNames,{firstName: 'Alan',lastName: 'Walker'});
    const fullName = combineNamesFunc('Vera','Brezhneva')
    expect(fullName).not.toBe('Alan Walker');
    expect(fullName).toBe('Vera Brezhneva');
  });
  it('should not default fullname when object does not have arguments', () => {
    const combineNamesFunc = defaultArguments(combineNames,{fullName: 'Alan Walker'});
    const fullName = combineNamesFunc()
    expect(fullName).not.toBe('Alan Walker');
    expect(fullName).toBe('undefined undefined');
  });
})