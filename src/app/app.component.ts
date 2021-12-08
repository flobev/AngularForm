import { ContactService } from './service/contact.service';
import { Component } from '@angular/core';
import { Contact } from './models/Contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angularForm';

  contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.contacts;
  }

  newTask(newContactEvent: any) {
    this.contacts.push(newContactEvent.contact);
    this.contactService.contacts = this.contacts;
  }
}
