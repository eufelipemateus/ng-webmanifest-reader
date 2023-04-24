import { CommonModule } from '@angular/common';
import { inject, ModuleWithProviders, NgModule, Optional, PLATFORM_ID, SkipSelf } from '@angular/core';
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
