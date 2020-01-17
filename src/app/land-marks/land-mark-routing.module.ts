import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { LandMarkEditComponent } from './land-mark-edit/land-mark-edit.component';
import { LandMarkDetailComponent } from './land-mark-detail/land-mark-detail.component';
import { LandMarkComponent } from './land-mark.component';

const landMarksRoutes: Routes = [
  { path: '', component: LandMarkComponent, children: [
    { path: 'new', component: LandMarkEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: LandMarkDetailComponent },
    { path: ':id/edit', component: LandMarkEditComponent, canActivate: [AuthGuard] },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(landMarksRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class LandMarkRoutingModule {}
