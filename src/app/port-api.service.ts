import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IPort } from './port/show-port/show-port.component';

@Injectable({
  providedIn: 'root'
})
export class PortApiService {
  readonly portApiUrl ="https://localhost:7216/api";

  constructor(private http:HttpClient) { }

  getPortList():Observable<IPort[]>{
    return this.http.get<IPort[]>(this.portApiUrl+"/Ports").pipe(
      map(data=>data.sort((a,b)=>a.portName.localeCompare(b.portName)))
    );
    
  }
  getCountryList():Observable<IPort[]>{
    return this.http.get<IPort[]>(this.portApiUrl+"/Countries");
  }

}
