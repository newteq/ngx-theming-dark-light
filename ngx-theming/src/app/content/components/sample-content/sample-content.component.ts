import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services';
import { IsDarkThemeKey } from '../../models';

@Component({
  selector: 'app-sample-content',
  templateUrl: './sample-content.component.html',
  styleUrls: ['./sample-content.component.scss']
})
export class SampleContentComponent implements OnInit {

	theme: string;

	constructor(
		private localStorage: LocalStorageService
	) { }

  ngOnInit() {
		if (this.localStorage.getItem(IsDarkThemeKey)){
			this.theme = 'Dark';
		} else {
			this.theme = 'Light';
		}
  }

}
