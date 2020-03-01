import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListViewComponent } from './contact-list-view/contact-list-view.component';
import { ServiceApiService } from './service-api.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { CommunicationModalComponent } from './communication-modal/communication-modal.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactModalComponent } from './contact-modal/contact-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactListViewComponent,
    ContactDetailsComponent,
    CommunicationModalComponent,
    ContactModalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
  
  ],
  providers: [ServiceApiService, NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [
    CommunicationModalComponent, ContactModalComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
