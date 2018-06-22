import { NgModule } from '@angular/core';

import { AngularEdSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AngularEdSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AngularEdSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AngularEdSharedCommonModule {}
