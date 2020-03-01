import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { ServiceApiService } from "../service-api.service";
import { Contact } from '../contact';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommunicationModalComponent } from '../communication-modal/communication-modal.component';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ContactDetailsComponent implements OnInit {

  displayedColumns: string[] = ['id1','title', 'firstName', 'lastName', 'gender', 'dob'];
  comColumnsToDisplay: string[] = ['id','type', 'value', 'preferred']; 
  addressColumnsToDisplay: string[] = ['id','type', 'number street','unit','city','state','zipcode']; 
  expandedElement: Contact | null;

  constructor(private serviceApi: ServiceApiService, private route: ActivatedRoute, private modalService: NgbModal) { 
    this.serviceApi.saved.subscribe({
      next: (event: String) => {
          console.log(`Received message #${event}`);
          this.loadData();
      }
  })
}

  ngOnInit() {

    console.log('In initialization/loading of contact details view');
   this.loadData();
   // ELEMENT_DATA = this.serviceApi.getContactById(route);
  }
  dataSource :  MatTableDataSource<Contact> ;
  contacts :  Contact[] = []

  deleteCommunicationRow(contactId: String, comId: String, comindex: String) {
    console.log(contactId);
    console.log(comId);
    console.log(comindex);
 
   //var comrowdel1= this.contacts[0].communication[0];
   // console.log(comrowdel1);
   //  this.contacts[0].communication = this.contacts[0].communication.splice(Number(comindex),1);
   //  this.loadData();
    console.log(this.contacts[0]);
    
   // this.dataSource = new MatTableDataSource(this.contacts.);
   // this.data.splice(index, 1);
    this.serviceApi.deleteCommunicationById(contactId, comId).subscribe({
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

  
  addCommunicationRow(id: String) {
    console.log('communication parent id :'+id);
    const modalRef = this.modalService.open(CommunicationModalComponent);
    modalRef.componentInstance.id1 = id;
  
    //console.log(modalRef.componentInstance.preferred );
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });

  }

  loadData() {
    this.route.paramMap.subscribe(params => {
      console.log('start 1');
      console.log(params.get('id'));
      console.log('start 2')
       this.serviceApi.getContactById(params.get('id')).subscribe(c =>{
        console.log('start 3');
          console.log(c);
          this.contacts[0] = c;
         // this.contacts[1] = c;
          console.log(this.contacts)
          this.dataSource = new MatTableDataSource(this.contacts);
          console.log('start 4')
      })   
      console.log('start 5');
      });
  }

}

