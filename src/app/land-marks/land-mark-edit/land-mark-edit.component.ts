import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as LandMarkActions from '../store/land-mark.actions';
import * as fromLandMark from '../store/land-mark.reducers';

@Component({
  selector: 'app-land-mark-edit',
  templateUrl: './land-mark-edit.component.html',
  styleUrls: ['./land-mark-edit.component.scss']
})
export class LandMarkEditComponent implements OnInit {
  id: number;
  editMode = false;
  landMarkForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromLandMark.FeatureState>) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.store.dispatch(new LandMarkActions.UpdateLandMark({
        index: this.id,
        updateLandMark: this.landMarkForm.value
      }));
    } else {
      this.store.dispatch(new LandMarkActions.AddLandMark(this.landMarkForm.value));
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let landMarkName = '';
    let landMarkShortDesc = '';
    let landMarkImagePath = '';
    let landMarkDetailDesc = '';

    if (this.editMode) {
      this.store.select('landMarks')
        .take(1)
        .subscribe((landMarkState: fromLandMark.State) => {
          const landMark = landMarkState.landMarks[this.id];
          landMarkName = landMark.name;
          landMarkShortDesc = landMark.shortDesc;
          landMarkImagePath = landMark.imagePath;
          landMarkDetailDesc = landMark.detailDesc;
        });
    }

    this.landMarkForm = new FormGroup({
      'name': new FormControl(landMarkName, Validators.required),
      'shortDesc': new FormControl(landMarkName, Validators.required),
      'imagePath': new FormControl(landMarkImagePath, Validators.required),
      'detailDesc': new FormControl(landMarkDetailDesc, Validators.required),
    });
  }
}
