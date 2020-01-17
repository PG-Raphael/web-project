import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LandMarkComponent } from './land-mark.component';
import { LandMarkListComponent } from './land-mark-list/land-mark-list.component';
import { LandMarkEditComponent } from './land-mark-edit/land-mark-edit.component';
import { LandMarkDetailComponent } from './land-mark-detail/land-mark-detail.component';
import { LandMarkItemComponent } from './land-mark-list/land-mark-item/land-mark-item.component';
import { LandMarkRoutingModule } from './land-mark-routing.module';
import { SharedModule } from '../shared/shared.module';
import { landMarkReducer } from './store/land-mark.reducers';
import { LandMarkEffects } from './store/land-mark.effects';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LandMarkComponent,
    LandMarkListComponent,
    LandMarkEditComponent,
    LandMarkDetailComponent,
    LandMarkItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LandMarkRoutingModule,
    SharedModule,
    StoreModule.forFeature('landMarks', landMarkReducer),
    EffectsModule.forFeature([LandMarkEffects]),
    NgbDropdownModule
  ],
  exports: [
    LandMarkComponent
  ]
})
export class LandMarkModule {}
