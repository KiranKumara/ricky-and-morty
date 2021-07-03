import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'episodes',
    loadChildren: () =>
      import('./episodes/episodes.module').then((m) => m.EpisodesModule),
  },
  {
    path: 'character/:id',
    loadChildren: () =>
      import('./character/character.module').then((m) => m.CharacterModule),
  },
  {
    path: '**',
    redirectTo: 'episodes',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
