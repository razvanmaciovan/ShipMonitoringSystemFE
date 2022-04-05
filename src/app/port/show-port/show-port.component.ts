import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortApiService } from 'src/app/port-api.service';
@Component({
  selector: 'app-show-port',
  templateUrl: './show-port.component.html',
  styleUrls: ['./show-port.component.css']
})
export class ShowPortComponent implements OnInit {
  portList$!: Observable<any[]>;


  constructor(private service: PortApiService) { }

  ngOnInit(): void {
    this.portList$ = this.service.getPortList();
  }

}
