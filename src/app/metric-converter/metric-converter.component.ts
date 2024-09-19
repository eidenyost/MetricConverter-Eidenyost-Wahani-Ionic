import { Component } from '@angular/core';

@Component({
    selector: 'app-metric-converter',
    template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Metric Converter</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="floating">Nilai</ion-label>
        <ion-input type="number" [(ngModel)]="inputValue"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Dari</ion-label>
        <ion-select [(ngModel)]="fromUnit">
          <ion-select-option value="mm">Milimeter</ion-select-option>
          <ion-select-option value="cm">Centimeter</ion-select-option>
          <ion-select-option value="m">Meter</ion-select-option>
          <ion-select-option value="km">Kilometer</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label>Ke</ion-label>
        <ion-select [(ngModel)]="toUnit">
          <ion-select-option value="mm">Milimeter</ion-select-option>
          <ion-select-option value="cm">Centimeter</ion-select-option>
          <ion-select-option value="m">Meter</ion-select-option>
          <ion-select-option value="km">Kilometer</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-button expand="block" (click)="convert()">Konversi</ion-button>

      <ion-item *ngIf="result !== null">
        <ion-label>Hasil: {{ result }} {{ toUnit }}</ion-label>
      </ion-item>
    </ion-content>
  `
})
export class MetricConverterComponent {
    inputValue: number = 0;
    fromUnit: string = 'm';
    toUnit: string = 'm';
    result: number | null = null;

    convert() {
        // Konversi ke meter terlebih dahulu
        let valueInMeters = this.convertToMeters(this.inputValue, this.fromUnit);

        // Kemudian konversi dari meter ke unit tujuan
        this.result = this.convertFromMeters(valueInMeters, this.toUnit);
    }

    convertToMeters(value: number, unit: string): number {
        switch (unit) {
            case 'mm': return value / 1000;
            case 'cm': return value / 100;
            case 'm': return value;
            case 'km': return value * 1000;
            default: return value;
        }
    }

    convertFromMeters(value: number, unit: string): number {
        switch (unit) {
            case 'mm': return value * 1000;
            case 'cm': return value * 100;
            case 'm': return value;
            case 'km': return value / 1000;
            default: return value;
        }
    }
}