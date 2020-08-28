import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';

@Controller('category')
export class CategoryController {

  constructor(
    private categoryService: CategoryService
  ) {}

  @Get()
  index(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Post()
  save(@Body() category: Category): Promise<Category> {
    return this.categoryService.create(category);
  }
}
