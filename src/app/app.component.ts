import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Vraj_Raulji_Learning_Angular';

  // Adding two new variables

  name: string = 'Vraj Raulji';
  age: number = 22;
}
