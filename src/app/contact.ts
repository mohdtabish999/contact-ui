import { Communication } from './Communication';

export interface Contact {
  
    dob : Date ;
    gender : String ;
    title : String ;
    firstName : String ;
    lastName : String ;
    communication : Communication[];
    
}