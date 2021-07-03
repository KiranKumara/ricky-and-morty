import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesComponent } from './episodes.component';

const routes: Routes = [
  { path: '', component: EpisodesComponent },
  {
    path: ':id',
    loadChildren: () =>
      import('./episode/episode.module').then((m) => m.EpisodeModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodesRoutingModule {}
