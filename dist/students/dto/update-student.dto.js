"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const register_student_dto_1 = require("./register.student.dto");
class UpdateStudentDto extends (0, mapped_types_1.PartialType)(register_student_dto_1.RegisterDto) {
}
exports.UpdateStudentDto = UpdateStudentDto;
//# sourceMappingURL=update-student.dto.js.map