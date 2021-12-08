import { Contact } from '../models/Contact';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  @Output() newContactEvent = new EventEmitter();

  contact: Contact = new Contact();

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  addContact() {

    this.contact.firstname = "Test";
    this.newContactEvent.emit({ contact: this.contact });

    this.contact = new Contact();
  }

  ngOnInit(): void {
  }

}
