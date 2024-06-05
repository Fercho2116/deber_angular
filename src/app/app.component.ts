import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecursosService } from './servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http';
import { Digimon } from './interfaz/digimon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  providers:[RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TareaAngular';
  digimon: Digimon[] = [];
  constructor(private recursosServices: RecursosService){
    recursosServices.obtenerDatos().subscribe(respuesta =>{
      this.digimon = respuesta as Array<Digimon>
    })
  }
}
