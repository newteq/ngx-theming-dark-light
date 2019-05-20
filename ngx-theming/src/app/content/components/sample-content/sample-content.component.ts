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
	
	private isDark: boolean;

	constructor(
		private localStorage: LocalStorageService
	) { }

  ngOnInit() {
		this.isDark = this.localStorage.getItem(IsDarkThemeKey);
		if (this.isDark) {
			this.theme = 'Dark';
		} else {
			this.theme = 'Light';
		}
	}
	
	changeTheme() {
		this.isDark = !this.isDark;
		this.localStorage.setItem(IsDarkThemeKey, this.isDark);
	}

}
