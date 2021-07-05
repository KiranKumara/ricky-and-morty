import { LoadEpisodesGuard } from '../guards';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesComponent } from './episodes.component';

const routes: Routes = [
  { path: '', component: EpisodesComponent, canActivate: [LoadEpisodesGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodesRoutingModule {}
