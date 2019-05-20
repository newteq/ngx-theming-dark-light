import { Component } from '@angular/core';
import { ThemeToggleService } from './content/services/theme-toggle.service';
import { IsDarkThemeKey } from './content/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'ngx-themingchange';

	private lightTheme = 'light-theme';
	private darkTheme = 'dark-theme';

	themeClass = this.darkTheme;

	constructor(private themeToggleService: ThemeToggleService) {
		this.toggleThemeClass(this.themeToggleService.isDarkTheme);
		this.themeToggleService.themeChanged.subscribe((isDark: boolean) => {
			this.toggleThemeClass(isDark);
		});
	}
	
	private someMethod() {
		console.log('test');
	}

	private toggleThemeClass(isDark: boolean) {
		if (isDark) {
			this.themeClass = this.darkTheme;
		} else {
			this.themeClass = this.lightTheme;
		}
	}
}
