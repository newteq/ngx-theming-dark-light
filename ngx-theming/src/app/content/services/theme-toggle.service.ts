import { Injectable, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { IsDarkThemeKey } from '../models';

@Injectable({
	providedIn: 'root'
})
export class ThemeToggleService {

	private isDark: boolean;

	constructor(private localStorageService: LocalStorageService) {
	}

	@Output() themeChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

	toggleTheme() {
		this.isDark = !this.isDark;
		this.localStorageService.setItem(IsDarkThemeKey, this.isDark);
		this.themeChanged.emit(this.isDark);
	}

	get currentTheme(): string {
		this.ensureTheme();
		if (this.isDark) {
			return 'Dark';
		} else {
			return 'Light';
		}
	}

	get isDarkTheme(): boolean {
		this.ensureTheme();
		return this.isDark;
	}

	private ensureTheme() {
		if (this.isDark === undefined) {
			const current = this.localStorageService.getItem(IsDarkThemeKey);
			if (current || current === null || current === undefined) {
				this.isDark = true;
			} else {
				this.isDark = false;
			}
			this.localStorageService.setItem(IsDarkThemeKey, this.isDark);
		}
	}
}
