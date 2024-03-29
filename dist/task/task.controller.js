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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("./task.service");
const AddTaskDto_1 = require("./dto/AddTaskDto");
const UpdateTaskDto_1 = require("./dto/UpdateTaskDto");
let TaskController = class TaskController {
    constructor(TaskService) {
        this.TaskService = TaskService;
    }
    async GetTasks() {
        return this.TaskService.GetTasks();
    }
    async GetTaskByID(id) {
        return this.TaskService.GetTaskByID(id);
    }
    async GetTaskByIdUser(id) {
        return this.TaskService.GetTaskByIdUser(id);
    }
    async GetProjectTask(id) {
        return await this.TaskService.GetTasksProject(id);
    }
    async AddTask(task, p, dev) {
        return this.TaskService.AddTask(task, p, dev);
    }
    async UpdateProject(id, task, dev) {
        return await this.TaskService.UpdateTask(id, task, dev);
    }
    async DeleteProject(id) {
        return await this.TaskService.RemoveTask(id);
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "GetTasks", null);
__decorate([
    (0, common_1.Get)('/getById/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "GetTaskByID", null);
__decorate([
    (0, common_1.Get)('/getByIdUser/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "GetTaskByIdUser", null);
__decorate([
    (0, common_1.Get)('/project/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "GetProjectTask", null);
__decorate([
    (0, common_1.Post)('add/:project/:dev'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('project')),
    __param(2, (0, common_1.Param)('dev')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddTaskDto_1.AddTaskDto, Number, Number]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "AddTask", null);
__decorate([
    (0, common_1.Patch)('update/:id/:dev'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('dev')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateTaskDto_1.UpdateTaskDto, Number]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "UpdateProject", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "DeleteProject", null);
TaskController = __decorate([
    (0, common_1.Controller)('task'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map