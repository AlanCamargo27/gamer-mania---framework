import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mostrarMenu = new Subject<boolean>()

  constructor() { }

  login(usuario:string, senha:string):void{

    if (usuario=="aluno" && senha == "1234") {
      localStorage.setItem('token', 'qwer1234');
      this.mostrarMenu.next(false);

    } else {
      this.mostrarMenu.next(true);
      window.location.reload();


    }


  }

  setMostrarMenu(valor: boolean) {
    this.mostrarMenu.next(valor);

  }

  getMostrarMenu() {
    return this.mostrarMenu.asObservable();
  }


}
