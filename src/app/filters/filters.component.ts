import { Component } from '@angular/core';

@Component({
  selector: 'filters',
  template: `
  <form>
    <h3>Filters</h3>
    <div fxLayout="row" >
      <md-select fxFlex="100" style="padding-top:20px" placeholder="Province" [(ngModel)]="selectedValue" name="food">
        <md-option *ngFor="let food of foods" [value]="food.value">
          {{food.viewValue}}
        </md-option>
      </md-select>
    </div>
    <div fxLayout="row" style="padding-top:20px">
      <md-select fxFlex="100" placeholder="Country" [(ngModel)]="selectedValue" name="food">
        <md-option *ngFor="let food of foods" [value]="food.value">
          {{food.viewValue}}
        </md-option>
      </md-select>
    </div>
    <div fxLayout="row" style="padding-top:20px">
      <md-select fxFlex="100" placeholder="Storechain" [(ngModel)]="selectedValue" name="food">
        <md-option *ngFor="let food of foods" [value]="food.value">
          {{food.viewValue}}
        </md-option>
      </md-select>
    </div>
    <div fxLayout="row" style="padding-top:20px">
      <md-select fxFlex="100" placeholder="Size of the store" [(ngModel)]="selectedValue" name="food">
        <md-option *ngFor="let food of foods" [value]="food.value">
          {{food.viewValue}}
        </md-option>
      </md-select>
    </div>
    <div fxLayout="row" style="padding-top:20px">
      <md-select fxFlex="100" placeholder="Category of product" [(ngModel)]="selectedValue" name="food">
        <md-option *ngFor="let food of foods" [value]="food.value">
          {{food.viewValue}}
        </md-option>
      </md-select>
    </div>
    <div fxLayout="row" style="padding-top:20px">
      <md-select fxFlex="100" placeholder="Specific event" [(ngModel)]="selectedValue" name="food">
        <md-option *ngFor="let food of foods" [value]="food.value">
          {{food.viewValue}}
        </md-option>
      </md-select>
    </div>
    <div fxLayout="row" style="padding-top:20px">
      <md-select fxFlex="100"placeholder="Type of material" [(ngModel)]="selectedValue" name="food">
        <md-option *ngFor="let food of foods" [value]="food.value">
          {{food.viewValue}}
        </md-option>
      </md-select>
    </div>
    <div fxLayout="row" fxLayoutAlign="center start" style="padding-top:30px">
      <button md-raised-button>Viewed</button>
      <button md-raised-button>Liked</button>
      <button md-raised-button>Recent</button>
    </div>
    <div fxLayout="row" fxLayoutAlign="end start" style="padding-top:30px">
      <button md-button>FILTER</button>
    </div>
  </form>
`})
export class FiltersComponent {
}
