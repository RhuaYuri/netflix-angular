import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-genero',
  templateUrl: './input-genero.component.html',
  styleUrls: ['./input-genero.component.css']
})

export class CustomInputComponent implements OnInit {
  availableOptions: string[] = ['Opção 1', 'Opção 2', 'Opção 3']; // Adicione suas opções aqui
  selectedOptions: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectionChange(event: any): void {
    const selectedValues = Array.from(event.target.selectedOptions, (option: any) => option.value);
    this.selectedOptions = [...this.selectedOptions, ...selectedValues.filter((value: string) => !this.selectedOptions.includes(value))];
  }

  removeOption(option: string): void {
    this.selectedOptions = this.selectedOptions.filter((value: string) => value !== option);
  }
}
