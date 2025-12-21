import { IsArray, IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class NewItemDto {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsArray()
	@IsString({ each: true })
	images: string[];

	@IsString()
	@IsNotEmpty()
	category: string;

	@IsString()
	@IsOptional()
	description?: string;
}
