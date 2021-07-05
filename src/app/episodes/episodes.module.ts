import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';

@NgModule({
  declarations: [EpisodesComponent],
  imports: [CommonModule, EpisodesRoutingModule, NgZorroAntdModule],
})
export class EpisodesModule {}
