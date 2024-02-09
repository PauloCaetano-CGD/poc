import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { CgdComponent } from './cgd/cgd.component';
import { CgdModule } from './cgd/cgd.module';
import { SampleService } from './service/sample.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { MaterialComponent } from './material/material.component';

@NgModule({
    imports: [
        BrowserModule,
        CgdModule,
        MaterialModule,
        HttpClientModule
    ],
    providers: [
        SampleService
    ],
})
export class ElementModule implements DoBootstrap {

    constructor(
        private injector: Injector
    ) {}

    ngDoBootstrap(appRef: ApplicationRef) {
        if (!customElements.get('cgd-provider')) {
           
            const cgdComponent = createCustomElement(CgdComponent, {
                injector: this.injector,
            });

            const materialComponent = createCustomElement(MaterialComponent, {
                injector: this.injector,
            });
            
            customElements.define('cgd-provider', cgdComponent);
            customElements.define('material-provider', materialComponent);
        }
    }
}