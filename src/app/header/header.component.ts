import { Component, Renderer2, } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { ServiceService } from '../Service/service.service';
import { CommonModule, NgIf, NgStyle } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HomeComponent, NgIf, NgStyle, RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  toggle: boolean = true;

  SmallNavbar: boolean = false


  constructor(private renderer: Renderer2, private service: ServiceService) { }

  ngOnInit() {

    if (this.toggle) {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }

  }

  handleToggleChange(e: any): void {

    this.toggle = !this.toggle
    this.service.isDark(this.toggle)

    if (this.toggle) {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }
  }


  togglemenu(e: any) {
    console.log(e);
    this.SmallNavbar = !this.SmallNavbar

    console.log(this.SmallNavbar);


  }

}
