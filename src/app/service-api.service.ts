import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { Contact } from './contact';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { environment } from 'src/environments/environment';


//const restUrl = 'http://127.0.0.1:8080';
const restUrl = environment.baseUrl;
//const restUrl = '/';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  data;
  saved: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  /* getContactList(): Observable<HttpResponse<Contact[]>> {
   getContactList(): Observable<HttpResponse<Contact[]>> {
     return this.http.get<HttpResponse<Contact[]>>(restUrl+'/contact-service/contact');
   }*/

  getContactList(): Observable<any> {
    return this.http.get(restUrl + '/contact-service/contact');
  }
  getContactById(id: string): Observable<any> {
    return this.http.get(restUrl + '/contact-service/contact/' + id);
  }

  public deleteCommunicationById(contactId: String, id: String): Observable<any> {
    return this.http.delete(restUrl + '/contact-service/contact/' + contactId + '/communication/' + id);
  }

  postCommunicationDetails(contactId: Number, type: String, value: String, preferred: String): Observable<any> {
    console.log('post1');
    const comBody = { type: type, value: value, preferred: preferred };
    console.log(comBody);
    console.log('before post');
    this.http.post(restUrl + '/contact-service/contact/' + contactId + '/communication', comBody).subscribe((result) => {
      // This code will be executed when the HTTP call returns successfully 
      this.data = result;
      this.saved.emit('someData');
    });
    return this.data;
  }

  postContactDetails(firstname: String, lastname: String, gender: String, dob: String) : Observable<any>{
    const contactBody = {identification : { firstName: firstname, lastName: lastname, dob: dob, gender:gender,'title':'Tech' }};
    console.log(contactBody);
    this.http.post(restUrl + '/contact-service/contact', contactBody).subscribe((result) => {
      // This code will be executed when the HTTP call returns successfully 
      this.data = result;
     this.saved.emit('someData');
    });
    return this.data;

  }
  deleteContact(contactId: String)  : Observable<any>{
    return this.http.delete(restUrl + '/contact-service/contact/' + contactId); 
   }
}
