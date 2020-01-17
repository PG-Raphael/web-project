import { Component, OnInit, Input } from '@angular/core';

import { LandMark } from '../../land-mark.model';

@Component({
  selector: 'app-land-mark-item',
  templateUrl: './land-mark-item.component.html',
  styleUrls: ['./land-mark-item.component.scss']
})
export class LandMarkItemComponent implements OnInit {
  @Input() landMark: LandMark;
  @Input() index: number;

  ngOnInit() {
  }
}
