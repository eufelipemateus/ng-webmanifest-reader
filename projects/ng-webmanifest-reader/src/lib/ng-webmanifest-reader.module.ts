import { CommonModule } from '@angular/common';
import { inject,  ModuleWithProviders, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgWebmanifestReader, NgWebmanifestReaderConfig } from './ng-webmanifest-reader.service';

@NgModule({
  imports:    [ CommonModule],
})
export class NgWebmanifestReaderModule {

  static forRoot(config?: NgWebmanifestReaderConfig): ModuleWithProviders<NgWebmanifestReaderModule>  {
    return {
      ngModule: NgWebmanifestReaderModule,
      providers: [
          {provide: PLATFORM_ID, useValue: 'PLATFORM_ID'},
          {provide: NgWebmanifestReaderConfig , useValue: config},
          {provide: NgWebmanifestReader,
            useFactory: (config:NgWebmanifestReaderConfig , platformId : string)=>{
              return new NgWebmanifestReader(config, platformId)
            },
          deps: [NgWebmanifestReaderConfig, PLATFORM_ID ]
        }
      ]
    };
  }
}
