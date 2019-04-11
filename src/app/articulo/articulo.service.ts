import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from './articulo';

const API_URL = "http://localhost:8080/s4_mascotas-api/api/articulos";

/**
 * Proveedor de servicios HTTP para operaciones de Articulos
 */
@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  /**
  * Constructor del servicio
  * @param http - HttpClient necesario para ejecutar los pedidos
  */
  constructor(private http: HttpClient) { }

  /**
   * Retorna la lista con todos los articulos en el sistema
   */
  getArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(API_URL);
  }

  /**
   * Retorna el detalle de los datos del articulo
   * @param articuloId - El id del articulo
   */
  getArticuloDetail(articuloId: number): Observable<Articulo>{
    return this.http.get<Articulo>(`${API_URL}/${articuloId}`)
  }

  crearArticulo(articulo:Articulo) : Observable<Articulo>
  {
    console.log("articulo:--->", articulo);
    return this.http.post<Articulo>(API_URL, articulo)
  }

}