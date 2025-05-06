import { Injectable, OnModuleInit } from '@nestjs/common';
import * as path from 'path';
import * as csv from 'csvtojson';

@Injectable()
export class ArticlesService implements OnModuleInit {
  private articles: any[] = [];

  async onModuleInit() {
    // Ruta al CSV
    const csvPath = path.join(__dirname, '..', '..', 'csv', 'articulos_ficticios.csv');
    this.articles = await csv().fromFile(csvPath);
    // Aseguramos que el id sea number
    this.articles = this.articles.map(a => ({ ...a, id: Number(a.id) }));
  }

  /** Devuelve todos los rubros únicos */
  getRubros(): string[] {
    return Array.from(new Set(this.articles.map(a => a.rubro)));
  }

  /** Todos los productos de un rubro */
  getProductsByRubro(rubro: string): any[] {
    return this.articles.filter(a => a.rubro === rubro);
  }

  /** Lista de atributos (columnas) que tienen valor en ese rubro */
  getAttributesByRubro(rubro: string): string[] {
    const prods = this.getProductsByRubro(rubro);
    const keys = new Set<string>();
    prods.forEach(p =>
      Object.entries(p).forEach(([k, v]) => {
        if (!['id','titulo','rubro'].includes(k) && v != null && v !== '') {
          keys.add(k);
        }
      })
    );
    return Array.from(keys);
  }

  /** Filtra productos que tengan todos los atributos no vacíos */
  filterProducts(rubro: string, attributes: string[]): any[] {
    return this.getProductsByRubro(rubro).filter(p =>
      attributes.every(attr => {
        const val = p[attr];
        return val != null && val !== '';
      })
    );
  }
}
