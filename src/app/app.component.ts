// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  inputValue: number = 0;
  fromUnit: string = 'm';
  toUnit: string = 'cm';
  result: number | null = null;

  constructor() { }

  // Konversi ke meter
  private toMeter(value: number, unit: string): number {
    switch (unit) {
      case 'mm': return value / 1000;
      case 'cm': return value / 100;
      case 'm': return value;
      case 'km': return value * 1000;
      default: return value;
    }
  }

  // Konversi dari meter
  private fromMeter(value: number, unit: string): number {
    switch (unit) {
      case 'mm': return value * 1000;
      case 'cm': return value * 100;
      case 'm': return value;
      case 'km': return value / 1000;
      default: return value;
    }
  }

  convert() {
    if (this.inputValue !== null) {
      const inMeters = this.toMeter(this.inputValue, this.fromUnit);
      this.result = this.fromMeter(inMeters, this.toUnit);
    }
  }
}