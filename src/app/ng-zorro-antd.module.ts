import { NgModule } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
// import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@NgModule({
  exports: [
    NzBreadCrumbModule,
    NzGridModule,
    NzImageModule,
    NzLayoutModule,
    NzListModule,
    // NzMenuModule,
    NzTypographyModule,
  ],
})
export class NgZorroAntdModule {}
