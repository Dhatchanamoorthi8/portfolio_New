import { Component } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private service: ServiceService) { }

  ngOnInit() {
    console.log(this.service.istoggle());
  }


}
