import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceApiService } from '../service-api.service';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.css']
})
export class ContactModalComponent implements OnInit {

  contactModalForm: FormGroup;
  constructor(public activeModal: NgbActiveModal,private formBuilder: FormBuilder,private serviceApi: ServiceApiService) {
    this.createForm();
   }
  

  ngOnInit() {
    console.log("Hello");
  }

  public createForm() {
    this.contactModalForm = this.formBuilder.group({
      firstname: '',
      lastname:'',
      gender: new FormControl('', Validators.required),
      dateOfBirth: ''
      //password: ''
    });
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  public submitForm() {
    
     console.log(this.contactModalForm.get('firstname').value);
     
    let firstname: String =  this.contactModalForm.get('firstname').value;
    var lastname: String = this.contactModalForm.get('lastname').value;
    var gender: String = this.contactModalForm.get('gender').value;
    var object: DateObject = this.contactModalForm.get('dateOfBirth').value;
    var dob = object.year + '-' + object.month + '-'+ object.day

     this.serviceApi.postContactDetails(firstname,lastname,gender,dob);
     //this.saved.emit('someData');
    this.activeModal.close(this.contactModalForm.value);
  }
}

export interface DateObject {
  year : String ;
  month : String ;
  day : String ;

}
