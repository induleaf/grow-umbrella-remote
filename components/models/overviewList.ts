const overviewList: any[] = [
  {
    name: 'Bulbasaur',
    type: 'Fire',
  },
  {
    name: 'Bulbafoo',
    type: 'Earth',
  },
];

const getList: any = (nameFilter: string) =>
  overviewList.filter(({ name }) => name.includes(nameFilter));

export default getList;
