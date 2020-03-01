import { Component, OnInit } from '@angular/core';
import { Observable } from  "rxjs";
import { ServiceApiService } from  "../service-api.service";
import { Contact } from '../contact';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, NavigationExtras } from '@angular/router';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';

@Component({
  selector: 'app-contact-list-view',
  templateUrl: './contact-list-view.component.html',
  styleUrls: ['./contact-list-view.component.css']
})
export class ContactListViewComponent implements OnInit {

  contactList : Observable<Contact[]>;


  constructor(private  serviceApi: ServiceApiService, private router: Router, private modalService: NgbModal) {

    this.serviceApi.saved.subscribe({
      next: (event: String) => {
          console.log(`Received message #${event}`);
          this.loadData();
      }
  })
   }

  ngOnInit() {
   // this.contactList = this.serviceApi.getContactList();
   console.log('In initialization/loading of contactlist view');
  this.loadData();
  }


  //navigate(contact: Contact){
navigate(id: String){
    console.log(id);
    console.log(2222);
  //  let navigationExtras: NavigationExtras = {
    //  queryParams: {
      //  contact: contact
      //}
 // }
 // this.router.navigateByUrl(['contactdetails/${id}']);
 // var myurl = `${url}/${id}`;
 var myurl = `contactdetails/${id}`;
  this.router.navigateByUrl(myurl).then(e => {
    if (e) {
      console.log("Navigation is successful!");
    } else {
      console.log("Navigation has failed!");
    }
  });
  }

    
  addContact() {
    const modalRef = this.modalService.open(ContactModalComponent);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }


  deleteContact(id: String){
    this.serviceApi.deleteContact(id).subscribe({    
      next: (result: any) => {
      console.log(result);
      },
      error: (err: any) => {
      console.log(err);
      },
      complete: () => {
        this.loadData();
      console.log('complete');
      }
      });
  }
  loadData() {
    this.serviceApi.getContactList().subscribe(data =>{ console.log();
      this.contactList=data;});
  }
}
