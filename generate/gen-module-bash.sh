#!/bin/bash

# Function to create a NestJS module, controller, service, and test files
create_nestjs_structure() {
  local module_name="$1"
  local module_dir="${module_name// /_}" # Replace spaces with underscores for folder names

  # Create module directory
  mkdir -p "../src/modules/${module_dir}"

  # Create module file
  cat <<EOF > "../src/modules/${module_dir}/${module_dir}.module.ts"
import { Module } from '@nestjs/common';
import { ${module_name}Controller } from './${module_dir}.controller';
import { ${module_name}Service } from './${module_dir}.service';

@Module({
  controllers: [${module_name}Controller],
  providers: [${module_name}Service],
  exports: [${module_name}Service]
})
export class ${module_name}Module {}
EOF

  # Create controller file
  cat <<EOF > "../src/modules/${module_dir}/${module_dir}.controller.ts"
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ${module_name}Service } from './${module_dir}.service';

@Controller('${module_dir}')
export class ${module_name}Controller {
  constructor(private readonly ${module_name}Service: ${module_name}Service) {}

  @Post()
  create(@Body() create${module_name}Dto: any) {
    return this.${module_name}Service.create(create${module_name}Dto);
  }

  @Get()
  findAll() {
    return this.${module_name}Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.${module_name}Service.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() update${module_name}Dto: any) {
    return this.${module_name}Service.update(+id, update${module_name}Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.${module_name}Service.remove(+id);
  }
}
EOF

  # Create service file
  cat <<EOF > "../src/modules/${module_dir}/${module_dir}.service.ts"
import { Injectable } from '@nestjs/common';

@Injectable()
export class ${module_name}Service {
  create(create${module_name}Dto: any) {
    return 'This action adds a new ${module_name}';
  }

  findAll() {
    return \`This action returns all ${module_name}\`;
  }

  findOne(id: number) {
    return \`This action returns a #${id} ${module_name}\`;
  }

  update(id: number, update${module_name}Dto: any) {
    return \`This action updates a #${id} ${module_name}\`;
  }

  remove(id: number) {
    return \`This action removes a #${id} ${module_name}\`;
  }
}
EOF

  # Create controller test file
  cat <<EOF > "../src/modules/${module_dir}/${module_dir}.controller.spec.ts"
import { Test, TestingModule } from '@nestjs/testing';
import { ${module_name}Controller } from './${module_dir}.controller';
import { ${module_name}Service } from './${module_dir}.service';

describe('${module_name}Controller', () => {
  let controller: ${module_name}Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [${module_name}Controller],
      providers: [${module_name}Service],
    }).compile();

    controller = module.get<${module_name}Controller>(${module_name}Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
EOF

  # Create service test file
  cat <<EOF > "../src/modules/${module_dir}/${module_dir}.service.spec.ts"
import { Test, TestingModule } from '@nestjs/testing';
import { ${module_name}Service } from './${module_dir}.service';

describe('${module_name}Service', () => {
  let service: ${module_name}Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [${module_name}Service],
    }).compile();

    service = module.get<${module_name}Service>(${module_name}Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
EOF

  echo "NestJS structure for ${module_name} created in ../src/modules/${module_dir}/"
}

# Check if module name is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <module_name>"
  exit 1
fi

# Call the function
create_nestjs_structure "$1"