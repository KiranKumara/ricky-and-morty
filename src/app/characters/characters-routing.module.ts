import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadCharactersGuard } from '../guards';
import { CharactersComponent } from './characters.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    canActivate: [LoadCharactersGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
