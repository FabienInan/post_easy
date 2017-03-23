import { Component } from '@angular/core';

@Component({
  selector: 'filters',
  template: `
  <div fxLayout="column" fxFlexOffset="10">
    <form>
      <h3>Filters</h3>
      <div fxLayout="row" fxFlex="80">
        <md-select fxFlex="100" style="padding-top:30px" placeholder="Province" [(ngModel)]="province" name="province">
          <md-option [value]="1">
            Ile de France
          </md-option>
          <md-option [value]="2">
            Rhone Alpes
          </md-option>
        </md-select>
      </div>
      <div fxLayout="row" style="padding-top:30px">
        <md-select fxFlex="100" placeholder="Country" [(ngModel)]="selectedCountry" name="country">
          <md-option [value]="1">
            France
          </md-option>
          <md-option [value]="2">
            Italie
          </md-option>
        </md-select>
      </div>
      <div fxLayout="row" style="padding-top:30px">
        <md-select fxFlex="100" placeholder="Storechain" [(ngModel)]="selectedStorechain" name="storechain">
          <md-option [value]="1">
            Auchan
          </md-option>
          <md-option [value]="2">
            Carrefour
          </md-option>
        </md-select>
      </div>
      <div fxLayout="row" style="padding-top:30px">
        <md-select fxFlex="100" placeholder="Size of the store" [(ngModel)]="selectedSize" name="food">
          <md-option [value]="1">
            Supermarche
          </md-option>
          <md-option [value]="2">
            Hypermarche
          </md-option>
        </md-select>
      </div>
      <div fxLayout="row" style="padding-top:30px">
        <md-select fxFlex="100" placeholder="Category of product" [(ngModel)]="selectedCategory" name="food">
          <md-option [value]="1">
            Boissons
          </md-option>
          <md-option [value]="2">
            Aide culinaire
          </md-option>
        </md-select>
      </div>
      <div fxLayout="row" style="padding-top:30px">
        <md-select fxFlex="100" placeholder="Specific event" [(ngModel)]="selectedEvent" name="food">
          <md-option [value]="1">
            Paques
          </md-option>
          <md-option [value]="2">
            Noel
          </md-option>
        </md-select>
      </div>
      <div fxLayout="row" style="padding-top:30px">
        <md-select fxFlex="100" placeholder="Type of material" [(ngModel)]="selectedType" name="food">
          <md-option [value]="1">
            Totem
          </md-option>
          <md-option [value]="2">
            Vitrine
          </md-option>
        </md-select>
      </div>
      <div fxLayout="row" fxLayoutAlign="end start" style="padding-top:30px">
        <button md-button>FILTER</button>
      </div>
    </form>
  </div>
`
})
export class FiltersComponent {
}
