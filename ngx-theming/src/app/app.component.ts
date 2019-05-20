import { Component } from '@angular/core';
import { LocalStorageService } from './content/services';
import { IsDarkThemeKey } from './content/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'ngx-theming';

	constructor(private localStorageService: LocalStorageService) {
		const currentTheme = this.localStorageService.getItem(IsDarkThemeKey);
		if (currentTheme === undefined || currentTheme === null) {
			this.localStorageService.setItem(IsDarkThemeKey, true);
		}
	}
}
