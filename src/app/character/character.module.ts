import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { SharedModule } from '../core/shared.moudle';

@NgModule({
  declarations: [CharacterComponent],
  imports: [CommonModule, CharacterRoutingModule, SharedModule],
})
export class CharacterModule {}
