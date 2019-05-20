import { Injectable } from '@angular/core';

const APP_LOCAL_STORAGE_PREFIX = 'NgxTheme-';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  public setItem(key: string, value: any, toJson: boolean = true) {
    let valueToStore;
    if (toJson) {
      valueToStore = JSON.stringify(value);
    } else {
      valueToStore = value;
    }
    localStorage.setItem(`${APP_LOCAL_STORAGE_PREFIX}${key}`, valueToStore);
  }

  public getItem(key: string, fromJson: boolean = true) {
    const value = localStorage.getItem(`${APP_LOCAL_STORAGE_PREFIX}${key}`);
    if (fromJson) {
      return JSON.parse(value);
    } else {
      return value;
    }
  }

  public removeItem(key: string) {
    localStorage.removeItem(`${APP_LOCAL_STORAGE_PREFIX}${key}`);
  }
}
