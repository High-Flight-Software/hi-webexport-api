import { OnModuleInit } from '@nestjs/common';
export declare class ArticlesService implements OnModuleInit {
    private articles;
    onModuleInit(): Promise<void>;
    getRubros(): string[];
    getProductsByRubro(rubro: string): any[];
    getAttributesByRubro(rubro: string): string[];
    filterProducts(rubro: string, attributes: string[]): any[];
}
