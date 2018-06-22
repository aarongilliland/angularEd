import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AngularEdRegionModule } from './region/region.module';
import { AngularEdCountryModule } from './country/country.module';
import { AngularEdLocationModule } from './location/location.module';
import { AngularEdDepartmentModule } from './department/department.module';
import { AngularEdTaskModule } from './task/task.module';
import { AngularEdEmployeeModule } from './employee/employee.module';
import { AngularEdJobModule } from './job/job.module';
import { AngularEdJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        AngularEdRegionModule,
        AngularEdCountryModule,
        AngularEdLocationModule,
        AngularEdDepartmentModule,
        AngularEdTaskModule,
        AngularEdEmployeeModule,
        AngularEdJobModule,
        AngularEdJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AngularEdEntityModule {}
