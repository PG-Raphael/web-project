import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromLandMark from '../store/land-mark.reducers';
import {reducers} from '../../store/app.reducers';

@Component({
  selector: 'app-land-mark-list',
  templateUrl: './land-mark-list.component.html',
  styleUrls: ['./land-mark-list.component.scss']
})
export class LandMarkListComponent implements OnInit {
  landMarksState: Observable<fromLandMark.State>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromLandMark.FeatureState>,
  ) {
  }

  ngOnInit() {
    this.landMarksState = this.store.select('landMarks');
    console.log(reducers.auth);
  }

  onNewLandMark() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
