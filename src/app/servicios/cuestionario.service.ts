import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { IPregunta } from './../interfaces/interfaces';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  // Array bat gordetzeko json-ean dauden galdera guztiak. Gogoratu array-a abiarazten arazoak ekiditzeko
  // Gehitu beharrezkoak diren konponenteak eta zerbitzuak
  galderaGuztiak:any[]=[];
  preguntak:IPregunta[]=[];
  pregunta!:IPregunta;

  constructor(private jsonZerbitzua: HttpClient, private alertController:AlertController) {
    //Datuak kargatu
    this.getJSON();
    this.getPregunta();
  }

  // IPregunta array-a bueltatuko duen metodoa, hau da, galdetegiko galdera guztiak array batean
  getPregunta(){
    this.galderaGuztiak.forEach(element => {
      this.pregunta = {
        logotipo: element.logotipo,
        respuesta : element.respuesta,
        respuestasIncorrectas: [],
        intentos: 0,
        acierto: false
      }
      this.preguntak.push(...element);
    });
    return this.preguntak 
  }

  // Fitxategia irakurtzeko metodoa
  // Gogoratu asinkronoa dela.
  async getJSON (){
    let datuakFitx:Observable<IPregunta[]>;
    datuakFitx = this.jsonZerbitzua.get<IPregunta[]>("/assets/datos/datos.json");
    datuakFitx.subscribe(datuak => {
      // Fitxategitik irakurtzen ditu datuak eta arrayan gordetzen ditu
      this.galderaGuztiak.push(...datuak);
  });
    console.log(this.galderaGuztiak)
  }



  // Ireki alerta bat galderaren enuntziatuarekin eta konprobatu erantzuna
  // 1 - Erantzun zuzena ala okerra denaren arabera eguneratzen du egoera
  // 2 - Ez ba du asmatzen:
  // 2.1 Saiakera kopuruari kendu bat
  // 2.2 Gordeko du erantzuna erantzunen array-an
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¿De qué marca es este logotipo?',
      inputs: [
        {
          placeholder: 'Atención a la ortografía'
        }
      ],
      buttons: [
        {
          text: 'Enviar',
          handler: () => {
            
          },
        },
     
      ],
    });
    await alert.present();
  }
}
