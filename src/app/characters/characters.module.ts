import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';

@NgModule({
  declarations: [CharactersComponent],
  imports: [CommonModule, CharactersRoutingModule, NgZorroAntdModule],
})
export class CharactersModule {}
