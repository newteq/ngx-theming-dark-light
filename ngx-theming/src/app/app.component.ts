import { Component } from '@angular/core';
import { ThemeToggleService } from './content/services/theme-toggle.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'ngx-theming-This is awesome';

	private lightTheme = 'light-theme';
	private darkTheme = 'dark-theme';

	themeClass = this.darkTheme;
	currentVersion: string;

	constructor(private themeToggleService: ThemeToggleService) {
		this.toggleThemeClass(this.themeToggleService.isDarkTheme);
		this.themeToggleService.themeChanged.subscribe((isDark: boolean) => {
			this.toggleThemeClass(isDark);
		});
		this.currentVersion = environment.majorVersion + "." + environment.minorversion;
	}

	private someMethod(param: string) {
		console.log(param + 'something else ');
	}

	private toggleThemeClass(isDark: boolean) {
		if (isDark) {
			this.themeClass = this.darkTheme;
		} else {
			this.themeClass = this.lightTheme;
		}
	}
}
