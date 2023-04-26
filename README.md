# ng-webmanifest-reader

This package read the **manifefest.json** file. with angular. 

# Example 
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

## Forked

[@easy-pwa/web-manifest-reader](https://github.com/easy-pwa/web-manifest-reader)

## Author  

**[Felipe Mateus](https://eufelipemateus.com)** - [eufelipemateus](https://github.com/eufelipemateus)
