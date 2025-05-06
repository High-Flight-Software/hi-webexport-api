import { Controller, Get, Query } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('api')
export class ArticlesController {
  constructor(private readonly svc: ArticlesService) {}

  @Get('rubros')
  getRubros() {
    return { rubros: this.svc.getRubros() };
  }

  @Get('products')
  getProducts(@Query('rubro') rubro: string) {
    return { products: this.svc.getProductsByRubro(rubro) };
  }

  @Get('attributes')
  getAttributes(@Query('rubro') rubro: string) {
    return { attributes: this.svc.getAttributesByRubro(rubro) };
  }

  @Get('products/filter')
  filterProducts(
    @Query('rubro') rubro: string,
    @Query('attributes') attrs: string
  ) {
    const lista = attrs ? attrs.split(',') : [];
    return { products: this.svc.filterProducts(rubro, lista) };
  }
}
