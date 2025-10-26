import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenu } from "../../components/top-menu/top-menu";
import { HeaderApp } from "../../../shared/components/header-app/header-app";

@Component({
  selector: 'country-layout',
  imports: [RouterOutlet, TopMenu, HeaderApp],
  templateUrl: './CountryLayout.html',
})
export class CountryLayoutComponent { }
