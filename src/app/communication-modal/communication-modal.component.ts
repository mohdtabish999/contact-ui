import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ServiceApiService } from "../service-api.service";


@Component({
  selector: 'app-communication-modal',
  templateUrl: './communication-modal.component.html',
  styleUrls: ['./communication-modal.component.css']
})
export class CommunicationModalComponent implements OnInit {

  @Input() id1: number;
  
  communicationModalForm: FormGroup;
 //saved: EventEmitter<any> = new EventEmitter();
  
  constructor(public activeModal: NgbActiveModal,private formBuilder: FormBuilder,private serviceApi: ServiceApiService) {
    this.createForm();
   }
  
  ngOnInit() {
  }

  public createForm() {
    this.communicationModalForm = this.formBuilder.group({
      type: '',
      value:'',
      preferred: new FormControl('', Validators.required) 
      //password: ''
    });
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  public submitForm() {
    console.log(this.id1);
     console.log(this.communicationModalForm.get('type').value);
     
    let type: String =  this.communicationModalForm.get('type').value;
    var value: String = this.communicationModalForm.get('value').value;
    var preferred: String = this.communicationModalForm.get('preferred').value;

     this.serviceApi.postCommunicationDetails(this.id1,type,value,preferred);
     //this.saved.emit('someData');
    this.activeModal.close(this.communicationModalForm.value);
  }

  
}
