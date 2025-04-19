import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProduceListingComponent } from './produce-listing/produce-listing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ProduceListingComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Grocconnect Admin';
  selectedComponent = 'produce'; // Default selection

  constructor () {}

  ngOnInit(): void {
    const savedComponent = localStorage.getItem('selectedComponent')
    if (savedComponent) {
      this.selectedComponent = savedComponent
    }
  }
  selectComponent(component: string): void {
    this.selectedComponent = component;
    localStorage.setItem('selectedComponent', component);
  }

  onComponentChange(): void {
    // Save the selected componet preference
    localStorage.setItem('selectedComponent', this.selectedComponent)

    // Out to console when user selects an option
    console.log('Selected component:', this.selectedComponent)
  }
}
