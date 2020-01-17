import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import * as fromLandMark from '../store/land-mark.reducers';
import * as LandMarksActions from '../store/land-mark.actions';

@Component({
  selector: 'app-land-mark-detail',
  templateUrl: './land-mark-detail.component.html',
  styleUrls: ['./land-mark-detail.component.scss']
})
export class LandMarkDetailComponent implements OnInit {
  landMarkState: Observable<fromLandMark.State>;
  id: number;
  isMenuCollapsed = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromLandMark.FeatureState>) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.landMarkState = this.store.select('landMarks');
        }
      );
  }

  isCollapse() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  onEditLandMark() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteLandMark() {
    this.store.dispatch(new LandMarksActions.DeleteLandMark(this.id));
    this.router.navigate(['/land-marks']);
  }

}
