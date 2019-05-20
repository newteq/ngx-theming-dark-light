import { Component, OnInit } from '@angular/core';
import { ThemeToggleService } from '../../services/theme-toggle.service';

@Component({
  selector: 'app-sample-content',
  templateUrl: './sample-content.component.html',
  styleUrls: ['./sample-content.component.scss']
})
export class SampleContentComponent implements OnInit {

	theme: string;

	constructor(
		private themeToggleService: ThemeToggleService,
	) { }

  ngOnInit() {
		this.theme = this.themeToggleService.currentTheme;
		this.themeToggleService.themeChanged.subscribe(() => {
			this.theme = this.themeToggleService.currentTheme;
		});
	}
	
	changeTheme() {
		this.themeToggleService.toggleTheme();
	}

}
