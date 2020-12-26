import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PureFunctionPipe } from './pipes';
import { MaterialModule } from './shared';
import { AutocompleteObjectComponent } from './components';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    PureFunctionPipe,
    AutocompleteObjectComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
