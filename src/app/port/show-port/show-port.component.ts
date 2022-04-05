import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortApiService } from 'src/app/port-api.service';
import { Pipe, PipeTransform } from '@angular/core';
export interface IPort{
  portId:number;
  portName:string;
  portCountryId:number;
}
@Component({
  selector: 'app-show-port',
  templateUrl: './show-port.component.html',
  styleUrls: ['./show-port.component.css']
})

export class ShowPortComponent implements OnInit {
  portList$!: Observable<IPort[]>;
  countryList$!: Observable<IPort[]>;

  constructor(private service: PortApiService) { }
  

  ngOnInit(): void {
    this.portList$ = this.service.getPortList();
    this.countryList$ = this.service.getCountryList();
  }

}
