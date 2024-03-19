import { Component, Input } from '@angular/core';
import moment from 'moment'; 
//import {moment} from 'moment'; //URL nie wygląda na poprawny? Jeśli tak to należałoby zewnętrzną bibliotekę umieścić w stosownym katalogu
import { CustomerInfoService } from "./services";

@Component({
  selector: 'my-app', 
  //'app-my' nazwa komponentu powinna lepiej opisywać jego rolę 
  template: `<h1>Customer latest activity date {{ formatDate(latestActivityDate) }}</h1>`,
  styleUrls: ['./app.component.css'], 
  //błędna ścieżka do pliku styli, jeśli komponent korzysta jedynie ze styli w app.component to nie ma potrzeby kolejnego ich importowania
})

export class AppComponent { 
  //'AppComponent' nazwa powinna lepiej opisywać rolę komponentu
  latestActivityDate: string;

  @Input() a: boolean; 
  // id użytkownika //błędny typ - prawdopodobnie powinien być number, leppiej byłoby użyć bardzziej opisowej nazwy np 'id'
  
  constructor(private customerInfoService: CustomerInfoService) { 
    customerInfoService.getCustomerIPById(this.a).subscribe((x) => { 
      //te instrukcje powinny być wykonane w ngOnInit nie w konstruktorze, 'a' nie jest zainicjalizowane podczas wykonywania konstruktora
      customerInfoService.getIPActivityDates(x).subscribe((y) => { 
        this.latestActivityDate = y.latestDate; 
        // czy kontekst this jest poprawny?
      })
    })
  }

  private formatDate(dateString: string): string {
    return moment(dateString).format('HH:m:s');
  }
}