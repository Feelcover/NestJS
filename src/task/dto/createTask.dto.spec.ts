import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Status } from '../task.interface';
import { CreateTaskDto } from './createTask.dto';

describe('createTask', () => {
  let dto;
  beforeAll(() => {
    dto = { task: '', tags: [], status: '' };
  });
  it('task пустая', async () => {
    const importDto = plainToInstance(CreateTaskDto, dto);
    const errors = await validate(importDto);
    expect(errors.map((err) => err.property).includes('task')).toBeTruthy();
  });
  it('tags пустой', async () => {
    const importDto = plainToInstance(CreateTaskDto, dto);
    const errors = await validate(importDto);
    expect(errors.map((err) => err.property).includes('tags')).toBeTruthy();
    expect(dto.tags.length).toBe(0);
  });
  it('tags не пустой и элементы - строки', async () => {
    dto.tags = ['тег', "qwe"];
    const importDto = plainToInstance(CreateTaskDto, dto);
    const errors = await validate(importDto);
    expect(errors.map((err) => err.property).includes('tags')).toBeFalsy();
    expect(dto.tags.length).not.toBe(0);
    expect(dto.tags.every((el)=>typeof el === "string")).toBeTruthy();
  });
  it('task не пустая', async () => {
    dto.task = 'задача';
    const importDto = plainToInstance(CreateTaskDto, dto);
    const errors = await validate(importDto);
    expect(errors.map((err) => err.property).includes('task')).toBeFalsy();
  });
  it('status - значение ENUM Status', async () => {
    dto.status = Status.ERROR;
    const importDto = plainToInstance(CreateTaskDto, dto);
    const errors = await validate(importDto);
    expect(errors.map((err) => err.property).includes('status')).toBeFalsy();
    expect(dto.status).toBe("error");
  });
});
