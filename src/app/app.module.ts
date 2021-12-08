import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ShowUpdateContactComponent } from './show-update-contact/show-update-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    AddContactComponent,
    ShowUpdateContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
