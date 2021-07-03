import { LoadEpisodesGuard, LoadEpisodeGuard } from '../guards';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesComponent } from './episodes.component';

const routes: Routes = [
  { path: '', component: EpisodesComponent, canActivate: [LoadEpisodesGuard] },
  {
    path: ':id',
    loadChildren: () =>
      import('./episode/episode.module').then((m) => m.EpisodeModule),
    canActivate: [LoadEpisodeGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodesRoutingModule {}
