import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import {RouterModule, Routes} from '@angular/router';
import { DossiersComponent } from './dossiers/dossiers.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {DossiersService} from '../services/dossiers.service';
import { EditerDossierComponent } from './editer-dossier/editer-dossier.component';
import { AjouterDossierComponent } from './ajouter-dossier/ajouter-dossier.component';
import {FormsModule} from '@angular/forms';
import { EditerFournisseurComponent } from './editer-fournisseur/editer-fournisseur.component';
import {FournisseursService} from '../services/fournisseurs.service';
import { AjouterFournisseurComponent } from './ajouter-fournisseur/ajouter-fournisseur.component';

const appRoutes: Routes = [
  { path: 'statistiques', component: StatistiquesComponent },
  { path: 'dossiers', component: DossiersComponent },
  {path: 'ajouter-dossier', component: AjouterDossierComponent},
  {path: 'editer-dossier/:id', component: EditerDossierComponent},
  { path: 'fournisseurs', component: FournisseursComponent },
  {path: 'ajouter-fournisseur', component: AjouterFournisseurComponent},
  {path: 'editer-fournisseur/:id', component: EditerFournisseurComponent},
  { path: '', redirectTo: '/statistiques', pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    StatistiquesComponent,
    DossiersComponent,
    FournisseursComponent,
    EditerDossierComponent,
    AjouterDossierComponent,
    EditerFournisseurComponent,
    AjouterFournisseurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [DossiersService, FournisseursService],
  bootstrap: [AppComponent]
})
export class AppModule { }
