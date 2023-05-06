const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

const findMatching = (array, string) => {
  const newDriverList = array.filter((element) => element.toLowerCase() === string.toLowerCase())
  return newDriverList
}

const fuzzyMatch = (array, string) => {
    const newDriverList = array.filter((element) => element.charAt(0) === string.charAt(0))
    return newDriverList
}

const driversList = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

const matchName = (array, string) => driversList.filter((driver) => driver.name === string);
