"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const path = require("path");
const csv = require("csvtojson");
let ArticlesService = class ArticlesService {
    constructor() {
        this.articles = [];
    }
    async onModuleInit() {
        const csvPath = path.join(__dirname, '..', '..', 'csv', 'articulos_ficticios.csv');
        this.articles = await csv().fromFile(csvPath);
        this.articles = this.articles.map(a => ({ ...a, id: Number(a.id) }));
    }
    getRubros() {
        return Array.from(new Set(this.articles.map(a => a.rubro)));
    }
    getProductsByRubro(rubro) {
        return this.articles.filter(a => a.rubro === rubro);
    }
    getAttributesByRubro(rubro) {
        const prods = this.getProductsByRubro(rubro);
        const keys = new Set();
        prods.forEach(p => Object.entries(p).forEach(([k, v]) => {
            if (!['id', 'titulo', 'rubro'].includes(k) && v != null && v !== '') {
                keys.add(k);
            }
        }));
        return Array.from(keys);
    }
    filterProducts(rubro, attributes) {
        return this.getProductsByRubro(rubro).filter(p => attributes.every(attr => {
            const val = p[attr];
            return val != null && val !== '';
        }));
    }
};
exports.ArticlesService = ArticlesService;
exports.ArticlesService = ArticlesService = __decorate([
    (0, common_1.Injectable)()
], ArticlesService);
//# sourceMappingURL=articles.service.js.map