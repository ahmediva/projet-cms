import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { AuthGuard } from '../../core/auth.guard';

const routes: Routes = [
  { path: '', component: ArticleListComponent, canActivate: [AuthGuard] },
  { path: 'new', component: ArticleFormComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
