var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var point2D = /** @class */ (function () {
    function point2D(number1, number2, d) {
        this.number1 = number1;
        this.number2 = number2;
        this.d = d;
    }
    point2D.prototype.length = function () {
        return Math.sqrt((this.d * Math.pow(this.number1, 2)) + (Math.pow(this.number1, 2) * this.d));
    };
    point2D.prototype.get_one = function () {
        return this.number1;
    };
    point2D.prototype.get_two = function () {
        return this.number2;
    };
    point2D.prototype.get_d = function () {
        return this.d;
    };
    return point2D;
}());
var point3D = /** @class */ (function (_super) {
    __extends(point3D, _super);
    function point3D(number1, number2, number3, d) {
        var _this = _super.call(this, number1, number2, d) || this;
        _this.number3 = number3;
        return _this;
    }
    point3D.prototype.length = function () {
        return Math.sqrt((_super.prototype.get_d.call(this) * Math.pow(_super.prototype.get_one.call(this), 2)) + (_super.prototype.get_d.call(this) * Math.pow(_super.prototype.get_two.call(this), 2)) + (Math.pow(this.number3, 2) * _super.prototype.get_d.call(this)));
    };
    return point3D;
}(point2D));
