import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { CardaComponent } from './carda/carda.component';
import { FooterComponent } from './ui/footer/footer.component';
import { CarouselComponent } from './homecomponent/carousel/carousel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,HomecomponentComponent,CardaComponent,FooterComponent,CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ECART';
}
