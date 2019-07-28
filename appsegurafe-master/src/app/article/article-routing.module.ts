import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { CreacionComponent } from './creacion/creacion.component';
import { ListadoComponent } from './listado/listado.component';


const routes: Routes = [
  {path: '', redirectTo:'creacion', pathMatch:'full'},
  {path: 'listado',component:ListadoComponent},
  {path: 'creacion',component:CreacionComponent},
  {path: 'detalle',component:DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
