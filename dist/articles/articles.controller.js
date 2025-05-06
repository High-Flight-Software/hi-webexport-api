"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesController = void 0;
const common_1 = require("@nestjs/common");
const articles_service_1 = require("./articles.service");
let ArticlesController = class ArticlesController {
    constructor(svc) {
        this.svc = svc;
    }
    getRubros() {
        return { rubros: this.svc.getRubros() };
    }
    getProducts(rubro) {
        return { products: this.svc.getProductsByRubro(rubro) };
    }
    getAttributes(rubro) {
        return { attributes: this.svc.getAttributesByRubro(rubro) };
    }
    filterProducts(rubro, attrs) {
        const lista = attrs ? attrs.split(',') : [];
        return { products: this.svc.filterProducts(rubro, lista) };
    }
};
exports.ArticlesController = ArticlesController;
__decorate([
    (0, common_1.Get)('rubros'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "getRubros", null);
__decorate([
    (0, common_1.Get)('products'),
    __param(0, (0, common_1.Query)('rubro')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)('attributes'),
    __param(0, (0, common_1.Query)('rubro')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "getAttributes", null);
__decorate([
    (0, common_1.Get)('products/filter'),
    __param(0, (0, common_1.Query)('rubro')),
    __param(1, (0, common_1.Query)('attributes')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "filterProducts", null);
exports.ArticlesController = ArticlesController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticlesController);
//# sourceMappingURL=articles.controller.js.map