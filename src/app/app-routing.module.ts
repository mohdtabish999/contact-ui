import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailsComponent } from "./contact-details/contact-details.component";
import {ContactListViewComponent } from "./contact-list-view/contact-list-view.component";

const routes: Routes = [{ path: 'contactdetails/:id', component: ContactDetailsComponent, data: { animation: 'contact' }  },
                        { path: 'contacts', component: ContactListViewComponent, data: { animation: 'contacts' }  },
                        { path: '', redirectTo: 'contacts', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
