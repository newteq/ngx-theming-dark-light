import { NgModule } from '@angular/core';
import { SampleContentComponent } from './components';
import { LocalStorageService } from './services';

@NgModule({
	imports: [
	],
	declarations: [
		SampleContentComponent
	],
	exports: [
		SampleContentComponent
	]
})
export class ContentModule { }
