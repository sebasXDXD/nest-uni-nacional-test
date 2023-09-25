"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePrerequisiteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_prerequisite_dto_1 = require("./create-prerequisite.dto");
class UpdatePrerequisiteDto extends (0, mapped_types_1.PartialType)(create_prerequisite_dto_1.CreatePrerequisiteDto) {
}
exports.UpdatePrerequisiteDto = UpdatePrerequisiteDto;
//# sourceMappingURL=update-prerequisite.dto.js.map