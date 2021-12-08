import { AddContactComponent } from './../add-contact/add-contact.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-update-contact',
  templateUrl: './show-update-contact.component.html',
  styleUrls: ['./show-update-contact.component.scss']
})
export class ShowUpdateContactComponent implements OnInit {

  constructor() { }

  updateProfile() {
    /* AddContactComponent.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    }); */
  }

  ngOnInit(): void {
  }

}
