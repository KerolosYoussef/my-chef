import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentSite = "Recipes";
  @Output() onSiteChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipesClick(){
    this.currentSite = "Recipes";
    this.onSiteChange.emit(this.currentSite);
  }
  onShoppingListClick(){
    this.currentSite = "Shopping List";
    this.onSiteChange.emit(this.currentSite);
  }

}
