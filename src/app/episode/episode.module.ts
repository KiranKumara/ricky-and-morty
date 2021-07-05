import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodeComponent } from './episode.component';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';

@NgModule({
  declarations: [EpisodeComponent],
  imports: [CommonModule, EpisodeRoutingModule, NgZorroAntdModule],
})
export class EpisodeModule {}
