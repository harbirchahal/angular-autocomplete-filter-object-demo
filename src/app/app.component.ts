import { Component } from '@angular/core';

import { DATA } from './data';
import { mapPeopleToOptions, Person, Config } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly people: Person[] = DATA;
  readonly peopleToOptions = mapPeopleToOptions;
  readonly config: Config = {
    icon: 'person',
    label: 'User',
    hint: 'Search with firstname or lastname',
  };

  doSomething(person: Person) {
    console.log('Selected person: ', person);
  }
}
