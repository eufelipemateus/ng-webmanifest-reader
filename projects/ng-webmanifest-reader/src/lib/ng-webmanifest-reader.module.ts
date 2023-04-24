import { CommonModule } from '@angular/common';
import {  ModuleWithProviders, NgModule } from '@angular/core';
import { NgWebmanifestReader, NgWebmanifestReaderConfig } from './ng-webmanifest-reader.service';


@NgModule({
  imports:      [ CommonModule ],
})
export class NgWebmanifestReaderModule {

  static forRoot(config?: NgWebmanifestReaderConfig): ModuleWithProviders<NgWebmanifestReaderModule>  {
    return {
      ngModule: NgWebmanifestReaderModule,
      providers: [
          {provide: NgWebmanifestReaderConfig , useValue: config},
          {provide: NgWebmanifestReader,
            useFactory: (config:NgWebmanifestReaderConfig )=>{

              config = !config?  new NgWebmanifestReaderConfig() : config;

              return  new NgWebmanifestReader('browser',  config)
            },
            deps: [NgWebmanifestReaderConfig]
        }
      ]
    };
  }
}
