"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendEmail = function (_a) {
        var to = _a.to, message = _a.message;
        console.log("Email enviado para");
    };
    return EmailService;
}());
exports.default = EmailService;
