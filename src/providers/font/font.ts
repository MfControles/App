import { Injectable ,HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';


@Injectable()
export class FontProvider {
  private theme: BehaviorSubject<String>;
 
  constructor() {
      this.theme = new BehaviorSubject('dark-theme');
  }

  setActiveTheme(val) {
      this.theme.next(val);
  }

  getActiveTheme() {
      return this.theme.asObservable();
  }
}