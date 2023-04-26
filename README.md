# ng-webmanifest-reader

This package read the **manifefest.json** file. with angular. 

# Example 

### app.module.ts
```typescript
import { NgModule } from  '@angular/core'
import { BrowserModule } from  '@angular/platform-browser'

import { AppComponent } from  './app.component'
import { NgWebmanifestReaderModule } from  'ng-webmanifest-reader'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		NgWebmanifestReaderModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export  class  AppModule {}
```



### app.service.ts
```typescript
import { Injectable } from  '@angular/core'
import { NgWebmanifestReader, WebManifest } from  'ng-webmanifest-reader'
  

@Injectable({
providedIn: 'root',
})

export  class  WebmanifestService {
	private  manifest: WebManifest  = {}

	constructor (_service: NgWebmanifestReader) {
		_service.readCallback((data: WebManifest | null, error: any) => {
			this.loadManifest(data, error)
		})
	}

	private  loadManifest (data: WebManifest | null, error: any) {
		if (data) {
			this.manifest  =  data
		}
	}

	get  version (): string {
		if (this.manifest) {
			return  this.manifest.version  ||  ''
		} else {
			return  ''
		}
	}
}
```

# Store Cache

This packe has store cache disable by default to anable import moldule with **NgWebmanifestReaderModule.forRoot({storeCache: true})**




## Forked

[@easy-pwa/web-manifest-reader](https://github.com/easy-pwa/web-manifest-reader)

## Author  

**[Felipe Mateus](https://eufelipemateus.com)** - [eufelipemateus](https://github.com/eufelipemateus)
