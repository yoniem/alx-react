import { normalizedData } from './notifications';

test('normalized data has correct result array', () => {
  const expectedResult = [
    "5debd76480edafc8af244228",
    "5debd764507712e7a1307303",
    // add all ids here
  ];
  expect(normalizedData.result).toEqual(expect.arrayContaining(expectedResult));
});

test('normalized data has correct users entity', () => {
  const expectedUser = {
    age: 25,
    email: "poole.sanders@holberton.nz",
    id: "5debd764a7c57c7839d722e9",
    name: { first: "Poole", last: "Sanders" },
    picture: "http://placehold.it/32x32"
  };
  expect(normalizedData.entities.users["5debd764a7c57c7839d722e9"]).toEqual(expectedUser);
});

test('normalized data has correct messages entity', () => {
  const expectedMessage = {
    guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
    isRead: false,
    type: "default",
    value: "Cursus risus at ultrices mi."
  };
  expect(normalizedData.entities.messages["efb6c485-00f7-4fdf-97cc-5e12d14d6c41"]).toEqual(expectedMessage);
});

test('normalized data has correct notifications entity', () => {
  const expectedNotification = {
    author: "5debd764f8452ef92346c772",
    context: "3068c575-d619-40af-bf12-dece1ee18dd3",
    id: "5debd7642e815cd350407777"
  };
  expect(normalizedData.entities.notifications["5debd7642e815cd350407777"]).toEqual(expectedNotification);
});
