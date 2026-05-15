import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  /** ISBN-13 des Buches, die Nutzer eingegeben hat. */
  public isbn13: string = "";

  /** Flag um während einer Anfrage die Buttons zu sperren. */
  public requestLaeuft: boolean = false;

  /** Wert für Ergebnisfeld mit Vor- und Nachname des Autors. */
  public autor: string = "";

  /** Wert für Ergebnisfeld mit Titel des Buches. */
  public titel: string = "";

  /** Wert für Ergebnisfeld mit Verlag des Buches. */
  public verlag: string = "";

  /** Fehlermeldung für die Anzeige unter dem Eingabefeld. */
  public fehlermeldung: string = "";


  /**
   * Konstruktor für *Dependency Injection*.
   */
  constructor( private httpClient: HttpClient ) {}


  /**
   * Event-Handler für den "Abrufen"-Button.
   * Hier soll die Anfrage an die Web-API gestellt werden.
   */
  public async onAbrufenButton() {

    this.fehlermeldung = "";
    this.autor  = "";
    this.titel  = "";
    this.verlag = "";

    this.requestLaeuft = true;

    const isbn13trimmed = this.isbn13.trim();

    if ( isbn13trimmed === "" ) {

      this.fehlermeldung = "Bitte eine ISBN-13 eingeben.";
      this.requestLaeuft = false;
      return;
    }

    if ( isbn13trimmed.length !== 13 ) {

      this.fehlermeldung = "Die ISBN-13 muss genau 13 Zeichen lang sein.";
      this.requestLaeuft = false;
      return;
    }

    this.fehlermeldung = "HTTP-Anfrage noch nicht implementiert :-(";
    this.requestLaeuft = false;

  }


  /**
   * Event-Handler für den "Löschen"-Button.
   * Hier sollen die Eingabefelder zurückgesetzt werden.
   */
  public async onLoeschenButton() {

    this.isbn13        = "";
    this.fehlermeldung = "";

    this.autor = "";
    this.titel = "";
    this.verlag = "";
  }

}
