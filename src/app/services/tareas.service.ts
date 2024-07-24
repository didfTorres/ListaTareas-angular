import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

private localstorageKey='listaTareas';

getTareas():string[] {
  return JSON.parse(localStorage.getItem(this.localstorageKey) as string) || [];
}
agregarTarea(tarea:string){
  const tareas=this.getTareas();
  tareas.push(tarea);
  localStorage.setItem(this.localstorageKey, JSON.stringify(tareas));
  
}

eliminarTarea(index:number){
  const tareas=this.getTareas();
  console.log(tareas);
  
  console.log(index);
  
  tareas.splice(index,1);
  localStorage.setItem(this.localstorageKey,JSON.stringify(tareas));
}



}
