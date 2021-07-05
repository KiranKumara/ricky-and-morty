import { NgModule } from '@angular/core';
import { CharacterStatusDirective } from '../directives/status.directive';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';

@NgModule({
  exports: [CharacterStatusDirective, NgZorroAntdModule],
  declarations: [CharacterStatusDirective],
})
export class SharedModule {}
