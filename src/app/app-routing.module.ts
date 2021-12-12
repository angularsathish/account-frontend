import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./demo/dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./demo/users/users.module').then(
            (module) => module.UsersModule
          ),
      },

      {
        path: 'project-crm',
        loadChildren: () =>
          import('./demo/panels/project-crm/project-crm.module').then(
            (module) => module.ProjectCrmModule
          ),
      },

      {
        path: 'helpdesk',
        loadChildren: () =>
          import('./demo/panels/helpdesk/helpdesk.module').then(
            (module) => module.HelpdeskModule
          ),
      },

      {
        path: 'charts',
        loadChildren: () =>
          import('./demo/pages/core-chart/core-chart.module').then(
            (module) => module.CoreChartModule
          ),
      },

      {
        path: 'task',
        loadChildren: () =>
          import('./demo/application/task/task.module').then(
            (module) => module.TaskModule
          ),
      },
      {
        path: 'todo',
        loadChildren: () =>
          import('./demo/application/todo/todo.module').then(
            (module) => module.TodoModule
          ),
      },
      {
        path: 'gallery',
        loadChildren: () =>
          import('./demo/application/gallery/gallery.module').then(
            (module) => module.GalleryModule
          ),
      },
      {
        path: 'editor',
        loadChildren: () =>
          import('./demo/extension/editor/editor.module').then(
            (module) => module.EditorModule
          ),
      },
      {
        path: 'invoice',
        loadChildren: () =>
          import('./demo/extension/invoice/invoice.module').then(
            (module) => module.InvoiceModule
          ),
      },
      {
        path: 'full-calendar',
        loadChildren: () =>
          import(
            './demo/extension/full-event-calendar/full-event-calendar.module'
          ).then((module) => module.FullEventCalendarModule),
      },
      {
        path: 'file-upload',
        loadChildren: () =>
          import('./demo/extension/files-upload/files-upload.module').then(
            (module) => module.FilesUploadModule
          ),
      },
      {
        path: 'sample-page',
        loadChildren: () =>
          import('./demo/pages/sample-page/sample-page.module').then(
            (module) => module.SamplePageModule
          ),
      },
    ],
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./demo/pages/authentication/authentication.module').then(
            (module) => module.AuthenticationModule
          ),
      },
      {
        path: 'maintenance',
        loadChildren: () =>
          import('./demo/pages/maintenance/maintenance.module').then(
            (module) => module.MaintenanceModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
