import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Config, filterOptionsByLabel, Option } from '../../models';

@Component({
  selector: 'autocomplete-object',
  templateUrl: './autocomplete-object.component.html',
  styleUrls: ['./autocomplete-object.component.css']
})
export class AutocompleteObjectComponent implements OnInit {
  @Input() options: Option[] = [];
  @Input() config: Config = {};
  @Output() optionSelected = new EventEmitter<Option>();

  readonly inputCtrl = new FormControl();
  readonly filteredOptions!: Observable<Option[]>;

  constructor() {
    this.filteredOptions = this.inputCtrl.valueChanges.pipe(
      startWith(''),
      map((value: string|Option) => {
        if (typeof value === 'string') {
          return filterOptionsByLabel(this.options, value);
        }
        return this.options;
      }));
  }

  ngOnInit() {
  }

  displayLabelFn(option: Option|null) {
    return option ? option.label : '';
  }

  trackByIdFn(option: Option) {
    return option.id;
  }
}
