import { NgModule } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  exports: [
    NzGridModule,
    NzImageModule,
    NzLayoutModule,
    NzListModule,
    NzDividerModule,
    NzSpaceModule,
    NzTypographyModule,
  ],
})
export class NgZorroAntdModule {}
