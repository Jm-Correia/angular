import { HeaderData } from './header-data.models';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _HeaderData = new BehaviorSubject<HeaderData>(
    {
      title: "Inicio",
      icon: "home",
      routeUrl: ""
    }
  )

  constructor() { }

  get HeaderData(): HeaderData{
    return this._HeaderData.value;
  }

  set HeaderData(headerData: HeaderData){
    this._HeaderData.next(headerData);
  }
}
