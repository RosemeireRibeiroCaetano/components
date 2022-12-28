import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.css']
})
export class StatusesComponent  {
  @Input() public text = '';
  @Input() public cor = '';
}
