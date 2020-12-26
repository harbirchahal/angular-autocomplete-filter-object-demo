import { Option } from './option';

export interface Person {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

export function getPersonLabel(person: Person): string {
  return `${person.firstname} ${person.lastname}`;
}

export function mapPeopleToOptions(people: Person[]): Option[] {
  return people.reduce((options: Option[], person: Person) => {
    options.push({
      ...person,
      label: getPersonLabel(person),
    });
    return options;
  }, []);
}
