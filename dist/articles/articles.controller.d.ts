import { ArticlesService } from './articles.service';
export declare class ArticlesController {
    private readonly svc;
    constructor(svc: ArticlesService);
    getRubros(): {
        rubros: string[];
    };
    getProducts(rubro: string): {
        products: any[];
    };
    getAttributes(rubro: string): {
        attributes: string[];
    };
    filterProducts(rubro: string, attrs: string): {
        products: any[];
    };
}
