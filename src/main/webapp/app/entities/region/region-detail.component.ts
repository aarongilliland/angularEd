import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IRegion } from 'app/shared/model/region.model';

@Component({
    selector: '-region-detail',
    templateUrl: './region-detail.component.html'
})
export class RegionDetailComponent implements OnInit {
    region: IRegion;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ region }) => {
            this.region = region;
        });
    }

    previousState() {
        window.history.back();
    }
}
