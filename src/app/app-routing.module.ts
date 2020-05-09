import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example/example.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';

const routes: Routes = [
  // APLIQUE SUAS CONFIGURAÇÕES DE ROTAS AQUI
  // {...}

  // ESTAS SÃO ROTAS DE EXEMPLO
  {
    path: "",
    component : DefaultLayoutComponent,
    children: [
      {path: "first-page", component: FirstPageComponent},
      {path: "second-page", component: SecondPageComponent},
      {path: "example",component : ExampleComponent},
      {path: "",redirectTo : "/example",pathMatch : "full"},
      {path: "**",component : ExampleComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
