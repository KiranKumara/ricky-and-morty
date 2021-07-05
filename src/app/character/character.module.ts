import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';

@NgModule({
  declarations: [CharacterComponent],
  imports: [CommonModule, CharacterRoutingModule, NgZorroAntdModule],
})
export class CharacterModule {}
