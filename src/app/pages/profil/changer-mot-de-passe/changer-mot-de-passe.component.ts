import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-changer-mot-de-passe',
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrls: ['./changer-mot-de-passe.component.scss']
})
export class ChangerMotDePasseComponent {

  constructor(private router: Router){

  }
  ngOnInit(){

  }

  cancel(): void{
    this.router.navigate(['profil']);
  }

}
