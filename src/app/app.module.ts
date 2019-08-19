import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import {RouterModule, Routes} from '@angular/router';
import { DossiersComponent } from './dossiers/dossiers.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ServiceDossier} from '../service/service.dossier';
import { EditerDossierComponent } from './editer-dossier/editer-dossier.component';
import { AjouterDossierComponent } from './ajouter-dossier/ajouter-dossier.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditerFournisseurComponent } from './editer-fournisseur/editer-fournisseur.component';
import {ServiceFournisseur} from '../service/service.fournisseur';
import { AjouterFournisseurComponent } from './ajouter-fournisseur/ajouter-fournisseur.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { EditerClientComponent } from './editer-client/editer-client.component';
import {ServiceClient} from '../service/service.client';
import {ServiceVehicule} from '../service/service.vehicule';
import {ServiceAgenceAssurance} from '../service/service.agenceAssurance';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { EditerRendezVousComponent } from './editer-rendez-vous/editer-rendez-vous.component';
import { AjouterRendezVousComponent } from './ajouter-rendez-vous/ajouter-rendez-vous.component';
import {ServiceRendezVous} from '../service/service.rendezVous';
import { FichiersComponent } from './fichiers/fichiers.component';
import { EditerFichierComponent } from './editer-fichier/editer-fichier.component';
import { AjouterFichierComponent } from './ajouter-fichier/ajouter-fichier.component';
import {ServiceFichier} from '../service/service.fichier';
import {ServiceContactDossier} from '../service/service.contactDossier';
import { ContactsDossiersComponent } from './contacts-dossiers/contacts-dossiers.component';
import {AjouterVehiculeComponent} from './ajouter-vehicule/ajouter-vehicule.component';
import {EditerVehiculeComponent} from './editer-vehicule/editer-vehicule.component';
import {AjouterAgenceAssuranceComponent} from './ajouter-agence-assurance/ajouter-agence-assurance.component';
import {EditerAgenceAssuranceComponent} from './editer-agence-assurance/editer-agence-assurance.component';
import { AjouterContactDossierComponent } from './ajouter-contact-dossier/ajouter-contact-dossier.component';
import { EditerContactDossierComponent } from './editer-contact-dossier/editer-contact-dossier.component';
import {ServiceContact} from '../service/service.contact';
import {ServiceTypeClient} from '../service/service.typeClient';
import { AjouterTypeClientComponent } from './ajouter-type-client/ajouter-type-client.component';
import {ServicePuissanceFiscale} from '../service/service.puissanceFiscale';
import {ServiceTypeCarburant} from '../service/service.typeCarburant';
import {ServiceMarqueVehicule} from '../service/service.marqueVehicule';
import {ServiceModeleVehicule} from '../service/service.modeleVehicule';
import {ServiceCompagnieAssurance} from '../service/service.compagnieAssurance';
import {ServiceTypeFichier} from '../service/service.typeFichier';
import {ServiceTypeContact} from '../service/service.typeContact';
import {ServiceStatutRdv} from '../service/service.statutRdv';
import {ServiceMotif} from '../service/service.motif';
import { PhasesDossiersComponent } from './phases-dossiers/phases-dossiers.component';
import {ServicePhaseDossier} from '../service/service.phaseDossier';
import {ServicePhase} from '../service/service.phase';
import { EditerPhaseDossierComponent } from './editer-phase-dossier/editer-phase-dossier.component';
import { AjouterPhaseDossierComponent } from './ajouter-phase-dossier/ajouter-phase-dossier.component';
import {ServicePieceDetache} from '../service/service.pieceDetache';
import {PiecesDetachesComponent} from './pieces-detaches/pieces-detaches.component';
import { EditerPieceDetacheComponent } from './editer-piece-detache/editer-piece-detache.component';
import { AjouterPieceDetacheComponent } from './ajouter-piece-detache/ajouter-piece-detache.component';
import { ContratsAssurancesComponent } from './contrats-assurances/contrats-assurances.component';
import {ServiceContratAssurance} from '../service/service.contratAssurance';
import {ServiceTypeContrat} from '../service/service.typeContrat';
import { ExpertsDossiersComponent } from './experts-dossiers/experts-dossiers.component';
import {ServiceExpertDossier} from '../service/service.expertDossier';
import {ServiceExpert} from '../service/service.expert';
import { EditerExpertDossierComponent } from './editer-expert-dossier/editer-expert-dossier.component';
import { AjouterExpertDossierComponent } from './ajouter-expert-dossier/ajouter-expert-dossier.component';
import { ParametrageComponent } from './parametrage/parametrage.component';
import {ServiceCollaborateurRdv} from '../service/service.collaborateurRdv';
import {ServiceCollaborateur} from '../service/service.collaborateur';
import { CollaborateurRdvsComponent } from './collaborateur-rdvs/collaborateur-rdvs.component';
import { AjouterCollaborateurRdvComponent } from './ajouter-collaborateur-rdv/ajouter-collaborateur-rdv.component';
import { EditerCollaborateurRdvComponent } from './editer-collaborateur-rdv/editer-collaborateur-rdv.component';
import { ContactsClientsComponent } from './contacts-clients/contacts-clients.component';
import { EditerContactComponent } from './editer-contact/editer-contact.component';
import { AjouterContactClientComponent } from './ajouter-contact-client/ajouter-contact-client.component';
import { ContactsExpertsComponent } from './contacts-experts/contacts-experts.component';
import { AjouterContactExpertComponent } from './ajouter-contact-expert/ajouter-contact-expert.component';
import { ContactsAgencesAssurancesComponent } from './contacts-agences-assurances/contacts-agences-assurances.component';
import { AjouterContactAgenceAssuranceComponent } from './ajouter-contact-agence-assurance/ajouter-contact-agence-assurance.component';
import { EditerDemandeReparationComponent } from './editer-demande-reparation/editer-demande-reparation.component';
import {ServiceDemandeReparation} from '../service/service.demandeReparation';
import {ServiceTache} from '../service/service.tache';
import { TachesComponent } from './taches/taches.component';
import { AjouterDemandeReparationComponent } from './ajouter-demande-reparation/ajouter-demande-reparation.component';
import { CommandesComponent } from './commandes/commandes.component';
import {ServiceCommande} from '../service/service.commande';
import { EditerCommandeComponent } from './editer-commande/editer-commande.component';
import { AjouterCommandeComponent } from './ajouter-commande/ajouter-commande.component';
import { PiecesDetachesCommandeComponent } from './pieces-detaches-commande/pieces-detaches-commande.component';
import { AjouterPieceDetacheCommandeComponent } from './ajouter-piece-detache-commande/ajouter-piece-detache-commande.component';
import {ServiceEtatPiece} from '../service/service.etatPiece';
import { AdminComponent } from './admin/admin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SecretariatComponent } from './secretariat/secretariat.component';
import { MecanicienComponent } from './mecanicien/mecanicien.component';
import { MagasinierComponent } from './magasinier/magasinier.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import {ServiceUtilisateur} from '../service/service.utilisateur';
import {ServiceRole} from '../service/service.role';
import { EditerUtilisateurComponent } from './editer-utilisateur/editer-utilisateur.component';
import { AjouterTacheComponent } from './ajouter-tache/ajouter-tache.component';
import { EditerTacheComponent } from './editer-tache/editer-tache.component';
import { CompagniesAssurancesComponent } from './compagnies-assurances/compagnies-assurances.component';
import { EditerCompagnieAssuranceComponent } from './editer-compagnie-assurance/editer-compagnie-assurance.component';
import { AjouterCompagnieAssuranceComponent } from './ajouter-compagnie-assurance/ajouter-compagnie-assurance.component';
import { AgencesAssurancesComponent } from './agences-assurances/agences-assurances.component';
import { CollaborateursComponent } from './collaborateurs/collaborateurs.component';
import { EditerCollaborateurComponent } from './editer-collaborateur/editer-collaborateur.component';
import { AjouterCollaborateurComponent } from './ajouter-collaborateur/ajouter-collaborateur.component';
import { ExpertsComponent } from './experts/experts.component';
import { EditerExpertComponent } from './editer-expert/editer-expert.component';
import { AjouterExpertComponent } from './ajouter-expert/ajouter-expert.component';
import { RolesComponent } from './roles/roles.component';
import { EditerRoleComponent } from './editer-role/editer-role.component';
import { TypesClientsComponent } from './types-clients/types-clients.component';
import { EditerTypeClientComponent } from './editer-type-client/editer-type-client.component';
import { TypesContactsComponent } from './types-contacts/types-contacts.component';
import { AjouterTypeContactComponent } from './ajouter-type-contact/ajouter-type-contact.component';
import { EditerTypeContactComponent } from './editer-type-contact/editer-type-contact.component';
import { EditerPieceDetacheCommandeComponent } from './editer-piece-detache-commande/editer-piece-detache-commande.component';
import { PiecesStatiComponent } from './pieces-stati/pieces-stati.component';
import { DossiersAgenceAssuranceComponent } from './dossiers-agence-assurance/dossiers-agence-assurance.component';
import { DossierAgenceAssuranceComponent } from './dossier-agence-assurance/dossier-agence-assurance.component';
import { DossiersExpertComponent } from './dossiers-expert/dossiers-expert.component';
import { PiecesStatiResultatComponent } from './pieces-stati-resultat/pieces-stati-resultat.component';
import {AgencesAssurancesCompagnieAssuranceComponent} from './agences-assurances-compagnie-assurance/agences-assurances-compagnie-assurance.component';

const appRoutes: Routes = [
  { path: 'statistiques', component: StatistiquesComponent },
  { path: 'dossiers', component: DossiersComponent },
  {path: 'ajouter-dossier', component: AjouterDossierComponent},
  {path: 'editer-dossier/:id', component: EditerDossierComponent},
  {path: 'ajouter-client/:id', component: AjouterClientComponent},
  {path: 'ajouter-vehicule/:id', component: AjouterVehiculeComponent},
  {path: 'ajouter-agence-assurance/:id', component: AjouterAgenceAssuranceComponent},
  { path: 'fournisseurs', component: FournisseursComponent },
  {path: 'ajouter-fournisseur', component: AjouterFournisseurComponent},
  {path: 'editer-fournisseur/:id', component: EditerFournisseurComponent},
  {path: 'editer-rendez-vous/:id', component: EditerRendezVousComponent},
  { path: 'ajouter-rendez-vous/:id', component: AjouterRendezVousComponent },
  { path: 'phases-dossiers', component: PhasesDossiersComponent },
  { path: 'editer-phase-dossier/:id', component: EditerPhaseDossierComponent },
  { path: 'ajouter-phase-dossier/:id', component: AjouterPhaseDossierComponent },
  { path: 'ajouter-contact-client-dossier/:id', component: AjouterContactDossierComponent },
  { path: 'editer-contact-dossier/:id', component: EditerContactDossierComponent },
  { path: 'ajouter-fichier/:id', component: AjouterFichierComponent },
  {path: 'editer-fichier/:id', component: EditerFichierComponent},
  { path: 'ajouter-type-client', component: AjouterTypeClientComponent },
  { path: 'editer-piece-detache/:id', component: EditerPieceDetacheComponent },
  { path: 'ajouter-piece-detache/:id', component: AjouterPieceDetacheComponent },
  { path: 'editer-expert-dossier/:id', component: EditerExpertDossierComponent },
  { path: 'ajouter-expert-dossier/:id', component: AjouterExpertDossierComponent },
  { path: 'ajouter-collaborateur-rdv/:id', component: AjouterCollaborateurRdvComponent },
  { path: 'editer-collaborateur-rdv/:id', component: EditerCollaborateurRdvComponent },
  { path: 'editer-contact/:id', component: EditerContactComponent },
  { path: 'ajouter-contact-client/:id', component: AjouterContactClientComponent },
  { path: 'ajouter-contact-expert/:id', component: AjouterContactExpertComponent },
  { path: 'editer-commande/:id', component: EditerCommandeComponent },
  { path: 'ajouter-contact-agence-assurance/:id', component: AjouterContactAgenceAssuranceComponent },
  { path: 'ajouter-demande-reparation/:id', component: AjouterDemandeReparationComponent },
  { path: 'ajouter-commande/:id', component: AjouterCommandeComponent },
  { path: 'ajouter-piece-detache-commande/:id', component: AjouterPieceDetacheCommandeComponent },
  { path: 'editer-piece-detache-commande/:id', component: EditerPieceDetacheCommandeComponent },
  { path: 'parametrage', component: ParametrageComponent },
  { path: 'statistiques', component: StatistiquesComponent },
  { path: 'utilisateurs', component: UtilisateursComponent },
  { path: 'editer-utilisateur/:id', component: EditerUtilisateurComponent },
  { path: 'ajouter-tache/:id', component: AjouterTacheComponent },
  { path: 'editer-tache/:id', component: EditerTacheComponent },
  { path: 'compagnies-assurances', component: CompagniesAssurancesComponent },
  { path: 'editer-compagnie-assurance/:id', component: EditerCompagnieAssuranceComponent },
  { path: 'ajouter-compagnie-assurance', component: AjouterCompagnieAssuranceComponent },
  { path: 'collaborateurs', component: CollaborateursComponent },
  { path: 'editer-collaborateur/:id', component: EditerCollaborateurComponent },
  { path: 'ajouter-collaborateur', component: AjouterCollaborateurComponent },
  { path: 'experts', component: ExpertsComponent },
  { path: 'editer-expert/:id', component: EditerExpertComponent },
  { path: 'ajouter-expert', component: AjouterExpertComponent },
  { path: 'types-clients', component: TypesClientsComponent },
  { path: 'editer-type-client/:id', component: EditerTypeClientComponent },
  { path: 'ajouter-type-client', component: AjouterTypeClientComponent },
  { path: 'types-contacts', component: TypesContactsComponent },
  { path: 'editer-type-contact/:id', component: EditerTypeContactComponent },
  { path: 'ajouter-type-contact', component: AjouterTypeContactComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'editer-role/:id', component: EditerRoleComponent },
  { path: 'agences-assurances', component: AgencesAssurancesComponent },
  { path: 'pieces-stati', component: PiecesStatiComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'secretariat', component: SecretariatComponent },
  { path: 'mecanicien', component: MecanicienComponent },
  { path: 'magasinier', component: MagasinierComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'dossier-agence-assurance/:id', component: DossierAgenceAssuranceComponent },
  { path: 'pieces-stati-resultat/:id', component: PiecesStatiResultatComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    StatistiquesComponent,
    DossiersComponent,
    AjouterDossierComponent,
    EditerDossierComponent,
    FournisseursComponent,
    EditerFournisseurComponent,
    AjouterFournisseurComponent,
    RendezVousComponent,
    EditerRendezVousComponent,
    AjouterRendezVousComponent,
    FichiersComponent,
    EditerFichierComponent,
    AjouterFichierComponent,
    AjouterClientComponent,
    EditerClientComponent,
    AjouterVehiculeComponent,
    EditerVehiculeComponent,
    AjouterAgenceAssuranceComponent,
    EditerAgenceAssuranceComponent,
    ContactsDossiersComponent,
    AjouterContactDossierComponent,
    EditerContactDossierComponent,
    AjouterTypeClientComponent,
    PhasesDossiersComponent,
    EditerPhaseDossierComponent,
    AjouterPhaseDossierComponent,
    PiecesDetachesComponent,
    EditerPieceDetacheComponent,
    AjouterPieceDetacheComponent,
    ContratsAssurancesComponent,
    ExpertsDossiersComponent,
    EditerExpertDossierComponent,
    AjouterExpertDossierComponent,
    ParametrageComponent,
    CollaborateurRdvsComponent,
    AjouterCollaborateurRdvComponent,
    EditerCollaborateurRdvComponent,
    ContactsClientsComponent,
    EditerContactComponent,
    AjouterContactClientComponent,
    ContactsExpertsComponent,
    AjouterContactExpertComponent,
    ContactsAgencesAssurancesComponent,
    AjouterContactAgenceAssuranceComponent,
    EditerDemandeReparationComponent,
    TachesComponent,
    AjouterDemandeReparationComponent,
    CommandesComponent,
    EditerCommandeComponent,
    AjouterCommandeComponent,
    PiecesDetachesCommandeComponent,
    AjouterPieceDetacheCommandeComponent,
    AdminComponent,
    AccueilComponent,
    SecretariatComponent,
    MecanicienComponent,
    MagasinierComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UtilisateursComponent,
    EditerUtilisateurComponent,
    AjouterTacheComponent,
    EditerTacheComponent,
    CompagniesAssurancesComponent,
    EditerCompagnieAssuranceComponent,
    AjouterCompagnieAssuranceComponent,
    AgencesAssurancesComponent,
    CollaborateursComponent,
    EditerCollaborateurComponent,
    AjouterCollaborateurComponent,
    ExpertsComponent,
    EditerExpertComponent,
    AjouterExpertComponent,
    RolesComponent,
    EditerRoleComponent,
    TypesClientsComponent,
    EditerTypeClientComponent,
    TypesContactsComponent,
    AjouterTypeContactComponent,
    EditerTypeContactComponent,
    EditerPieceDetacheCommandeComponent,
    PiecesStatiComponent,
    DossiersAgenceAssuranceComponent,
    DossierAgenceAssuranceComponent,
    DossiersExpertComponent,
    AgencesAssurancesCompagnieAssuranceComponent,
    PiecesStatiResultatComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ServiceDossier,
    ServiceFournisseur,
    ServicePieceDetache,
    ServiceClient,
    ServiceTypeClient,
    ServiceVehicule,
    ServiceAgenceAssurance,
    ServiceRendezVous,
    ServiceStatutRdv,
    ServiceMotif,
    ServiceContactDossier,
    ServiceContact,
    ServiceFichier,
    ServicePuissanceFiscale,
    ServiceTypeCarburant,
    ServiceMarqueVehicule,
    ServiceCompagnieAssurance,
    ServiceTypeFichier,
    ServiceTypeContact,
    ServicePhaseDossier,
    ServicePhase,
    ServiceContratAssurance,
    ServiceTypeContrat,
    ServiceExpertDossier,
    ServiceExpert,
    ServiceCollaborateurRdv,
    ServiceCollaborateur,
    ServiceDemandeReparation,
    ServiceTache,
    ServiceCommande,
    ServiceEtatPiece,
    ServiceModeleVehicule,
    ServiceUtilisateur,
    ServiceRole,
    httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
