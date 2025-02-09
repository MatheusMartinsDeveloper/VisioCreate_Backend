import { IsString, IsNumber, IsArray, IsBoolean, IsNotEmpty, IsOptional } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;
    
    @IsNumber()
    @IsNotEmpty()
    price: number;
    
    @IsString()
    @IsNotEmpty()
    brand: string;
    
    @IsString()
    @IsNotEmpty()
    category: string;
    
    @IsNumber()
    @IsNotEmpty()
    stock: number;

    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty()
    sizes: string[];
    
    @IsBoolean()
    @IsNotEmpty()
    isNew: boolean;
    
    @IsBoolean()
    @IsNotEmpty()
    isDiscounted: boolean;
    
    @IsNumber()
    @IsOptional()
    discountPercentage?: number; 
}