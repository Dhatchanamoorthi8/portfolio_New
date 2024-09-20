import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private toggle: boolean = false;

  isDark(Data: boolean) {
    this.toggle = Data;
  }

  istoggle(): boolean {
    return this.toggle
  }


}
