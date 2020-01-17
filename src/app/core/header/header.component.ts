import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import * as LandMarkActions from '../../land-marks/store/land-mark.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private store: Store<fromApp.AppState>) {
  }

  isMenuCollapsed = true;

  isCollapse() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.store.dispatch(new LandMarkActions.StoreLadMarks());
  }

  onFetchData() {
    this.store.dispatch(new LandMarkActions.FetchLandMarks());
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
