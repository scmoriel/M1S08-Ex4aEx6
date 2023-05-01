import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'M1S08-Ex4aEx6';
  personagem: any = {
    nome: 'Coronel Jack O Neill',
    imagem: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Jackoneill.jpg',
    nomeAtor: 'Richard Dean Anderson',
    descricao:'O ator também é conhecido por ter feito, o personagem Angus MacGyver, na serie MacGyver'
  };
}
