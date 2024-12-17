import { Component } from '@angular/core';
import { IonHeader, IonContent, IonTitle, IonItem, IonLabel, IonSelect, IonSelectOption, IonToolbar } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { TrianguloComponent } from '../models/triangulo/triangulo.component';
import { CirculoComponent } from '../models/circulo/circulo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonToolbar, IonHeader, IonContent, IonTitle, IonItem, IonLabel, IonSelect, IonSelectOption, FormsModule, TrianguloComponent, CirculoComponent, CommonModule],
  standalone: true
})
export class HomePage {
  figuraSeleccionada: string = '';
}
