import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExpeiriencesComponent} from './expeiriences/expeiriences.component';
import {ProfileComponent} from './profile/profile.component';
import {RecentComponent} from './recent/recent.component';
import {SkillsComponent} from './skills/skills.component';
import {ProjectsComponent} from './projects/projects.component';

const routes: Routes = [
  {path: 'experiences', component: ExpeiriencesComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'recent', component: RecentComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: '', redirectTo: 'profile', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
