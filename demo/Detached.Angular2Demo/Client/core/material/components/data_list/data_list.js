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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MdDataListComponent = (function () {
    function MdDataListComponent() {
    }
    return MdDataListComponent;
}());
__decorate([
    core_1.ContentChild(core_1.TemplateRef),
    __metadata("design:type", core_1.TemplateRef)
], MdDataListComponent.prototype, "template", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MdDataListComponent.prototype, "placeholder", void 0);
MdDataListComponent = __decorate([
    core_1.Component({
        selector: 'md-data-list',
        template: require("./data_list.html"),
        encapsulation: core_1.ViewEncapsulation.None
    })
], MdDataListComponent);
exports.MdDataListComponent = MdDataListComponent;
//# sourceMappingURL=data_list.js.map