import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectRobotComponent } from './pages/project-robot/project-robot.component';
import { ProjectRpgComponent } from './pages/project-rpg/project-rpg.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Page d'accueil
  { path: 'robot', component: ProjectRobotComponent }, // projet Robot
  { path: 'rpg', component: ProjectRpgComponent }, // projet RPG
];