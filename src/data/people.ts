export type Position =
  | 'Principal Investigator'
  | 'Postdoctoral Researcher'
  | 'PhD Student'
  | 'Former PhD Student';

export type Profile = {
  firstNames: string[];
  lastName: string;
  position: Position;
  image: string;
  joined: number;
  until?: number;
  website: string;
};

export const people: Profile[] = [
  {
    firstNames: ['Adriana'],
    lastName: 'Schulz',
    position: 'Principal Investigator',
    image: 'profile/adriana.jpg',
    joined: 2014,
    website: 'https://homes.cs.washington.edu/~adriana/',
  },
  {
    firstNames: ['Felix'],
    lastName: 'Hähnlein',
    position: 'Postdoctoral Researcher',
    image: 'profile/felix.jpg',
    joined: 2022,
    website: 'https://obikate.github.io/',
  },
  {
    firstNames: ['Milin'],
    lastName: 'Kodnongbua',
    position: 'PhD Student',
    image: 'profile/milin.jpg',
    joined: 2022,
    website: 'https://mkodnongbua.com/',
  },
  {
    firstNames: ['Yuxuan'],
    lastName: 'Mei',
    position: 'PhD Student',
    image: 'profile/yuxuan.jpg',
    joined: 2018,
    website: 'https://homes.cs.washington.edu/~ym2552/',
  },
  {
    firstNames: ['Amy'],
    lastName: 'Zhu',
    position: 'PhD Student',
    image: 'profile/amy.jpg',
    joined: 2019,
    website: 'https://amy.zhucchini.ca/',
  },
  {
    firstNames: ['Nat'],
    lastName: 'Hurtig',
    position: 'PhD Student',
    image: 'profile/nat.jpg',
    joined: 2024,
    website: 'https://nathanhurtig.com/',
  },
  {
    firstNames: ['Jack'],
    lastName: 'Zhang',
    position: 'PhD Student',
    image: 'profile/jack.jpg',
    joined: 2024,
    website: 'https://zzhang-18.github.io/',
  },
  {
    firstNames: ['Dan'],
    lastName: 'Cascaval',
    position: 'PhD Student',
    image: 'profile/dan.jpg',
    joined: 2018,
    website: 'https://dan.cascaval.us/',
  },
  {
    firstNames: ['James'],
    lastName: 'Noeckel',
    position: 'Former PhD Student',
    image: 'profile/james.jpg',
    joined: 2018,
    until: 2024,
    website: 'https://james.noeckel.com/',
  },
  {
    firstNames: ['Benjamin', 'Benjamin T.'],
    lastName: 'Jones',
    position: 'Former PhD Student',
    image: 'profile/ben.jpg',
    joined: 2018,
    until: 2024,
    website: 'https://bentodjones.com/',
  },
];

const POSITION_ORDER = {
  'Principal Investigator': 0,
  'Postdoctoral Researcher': 1,
  'PhD Student': 2,
  'Former PhD Student': 3,
} as const;

people.sort((a, b) => {
  if (POSITION_ORDER[a.position] != POSITION_ORDER[b.position])
    return POSITION_ORDER[a.position] - POSITION_ORDER[b.position];
  return a.joined - b.joined;
});

export const peopleByLastName = people.reduce((acc, person) => {
  acc[person.lastName.toLowerCase()] = person;
  return acc;
}, {} as Record<string, Profile>);
