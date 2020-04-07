import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders ,HttpParams } from '@angular/common/http';
import { Contact } from './contact';
import { map } from 'rxjs/operators';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private REST_API_SERVER = "http://localhost:3000/api/contacts";
  

  constructor(private httpClient : HttpClient) { }
  

  //retrieving contacts
    // getContacts1():Observable<ContactService[]>
    // {
    //   return this.http.get('').subscribe()
    // }
    // //(payload: Payload<GetBooksResponse>) => {

    //   return payload.result.map((response: GetBooksResponse) => { 

    //     return {
    //       id: response.id, 
    //       title: response.title
    //     };


    public getContacts()
    {
      return this.httpClient.get(this.REST_API_SERVER)
      .pipe(map((res:Response) => {
          res.json()
      }));
    }
      

    //add contact method
    public addContact(newContact)
    {
      //var headers = new Headers();
      var headers = headers.append('Accept', 'application/json');
      //headers.append('Content-type','application/json');

      return this.httpClient.post('http://localhost:3000/api/contacts/', newContact, {headers : headers})
      .pipe(map((res:Response) =>{
        res.json()
      }))
    }

    // //delete contact
    deleteContact(id)
    {
      return this.httpClient.delete('http://localhost:3000/api/contacts/'), id .pipe(map((res:Response) =>{
        res.json()
      }))
    }
}
