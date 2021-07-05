import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodeComponent } from './episode.component';
import { SharedModule } from '../core/shared.moudle';

@NgModule({
  declarations: [EpisodeComponent],
  imports: [CommonModule, EpisodeRoutingModule, SharedModule],
})
export class EpisodeModule {}
