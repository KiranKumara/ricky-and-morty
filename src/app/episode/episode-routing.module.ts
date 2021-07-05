import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadEpisodeGuard } from '../guards';
import { EpisodeComponent } from './episode.component';

const routes: Routes = [
  { path: '', component: EpisodeComponent, canActivate: [LoadEpisodeGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodeRoutingModule {}
