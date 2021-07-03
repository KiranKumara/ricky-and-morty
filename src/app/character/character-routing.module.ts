import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoadCharacterGuard } from '../guards';
import { CharacterComponent } from './character.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterComponent,
    canActivate: [LoadCharacterGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterRoutingModule {}
