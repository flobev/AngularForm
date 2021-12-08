import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUpdateContactComponent } from './show-update-contact.component';

describe('ShowUpdateContactComponent', () => {
  let component: ShowUpdateContactComponent;
  let fixture: ComponentFixture<ShowUpdateContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUpdateContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUpdateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
