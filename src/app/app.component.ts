import { Component } from '@angular/core'; //este nos permite definir un componente
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root', //Nombre que se le dara a nuestra app
  standalone: true, //Indica que este componente es independiente y no depende de otros componentes
  imports: [FormsModule], //Importamos el modulo de formularios para poder usar ngModel
  templateUrl: './app.component.html', //Ruta del template html
  styleUrls: ['./app.component.css'] //Ruta del css
})

//Toda la logica de la app se encuentra en este componente
export class AppComponent {
  celsius: number = 0;
  fahrenheit: number = 0;

  convertirCelsius() {
    this.celsius = (this.fahrenheit - 32) * 5 / 9;
  }

  convertirFahrenheit() {
    this.fahrenheit = (this.celsius * 9 / 5) + 32;
  }
}
