import { Component } from '@angular/core';
import { CuestionarioService } from './../servicios/cuestionario.service';
import { IPregunta } from './../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  //Zerbitzua inportatu
  constructor(public zerbitzua:CuestionarioService) {}

  //Metodo bat sortu "Erantzun" onclick egiteko
  //IGaldera bat jasoko du eta zerbitzua deituko du beharrezkoak diren eragiketak egiteko
  erantzunOnClick(pregunta:IPregunta){

  }
  //Sortu metodo bat "Gorde"ren onclick-a kudeatzeko
  //Ez du parametrorik jasotzen eta zerbitzuari deituko dio dagokion eragiketak egiteko.
  gordeOnClick(){

  }
}
