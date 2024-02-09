import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CgdModule } from './cgd/cgd.module';
import { SampleService } from './service/sample.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CgdModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    SampleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
