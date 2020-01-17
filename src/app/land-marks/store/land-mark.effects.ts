import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';

import * as LandMarkActions from './land-mark.actions';
import { LandMark } from '../land-mark.model';
import * as fromLandMark from './land-mark.reducers';

@Injectable()
export class LandMarkEffects {
  @Effect()
  landMarkFetch = this.actions$
    .ofType(LandMarkActions.FETCH_LANDMARK)
    .switchMap((action: LandMarkActions.FetchLandMarks) => {
      return this.httpClient.get<LandMark[]>('https://web-project-53e38.firebaseio.com/land-marks.json', {
        observe: 'body',
        responseType: 'json'
      })
    })
    .map(
      (landMarks) => {
        return {
          type: LandMarkActions.SET_LANDMARKS,
          payload: landMarks
        };
      }
    );

  @Effect({dispatch: false})
  landMarkStore = this.actions$
    .ofType(LandMarkActions.STORE_LANDMARK)
    .withLatestFrom(this.store.select('landMarks'))
    .switchMap(([action, state]) => {
      const req = new HttpRequest('PUT', 'https://web-project-53e38.firebaseio.com/land-marks.json', state.landMarks, {reportProgress: true});
      return this.httpClient.request(req);
    });

  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<fromLandMark.FeatureState>) {}
}
