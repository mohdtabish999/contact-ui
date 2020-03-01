import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListViewComponent } from './contact-list-view.component';

describe('ContactListViewComponent', () => {
  let component: ContactListViewComponent;
  let fixture: ComponentFixture<ContactListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
