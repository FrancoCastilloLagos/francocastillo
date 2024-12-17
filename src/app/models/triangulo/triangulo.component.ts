import { Component } from '@angular/core';
import { TrianguloEscaleno } from '../../models/figuras';
import { IonCard, IonLabel, IonCardTitle, IonCardHeader, IonCardContent, IonItem, IonInput, IonButton,IonImg } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-triangulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
  imports: [IonCard, IonLabel,IonImg, IonCardTitle, IonCardHeader, IonCardContent, IonItem, IonInput, IonButton, FormsModule, CommonModule]
})
export class TrianguloComponent {
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  resultado: number | null = null;

  calcular() {
    const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
    this.resultado = triangulo.calcularPerimetro();
  }
}
