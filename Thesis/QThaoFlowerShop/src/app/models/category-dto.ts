import { ProductDto } from './product-dto';
export class CategoryDto {
    public id?: string;
    public name: string;
    public displayName: string;
    public products?: ProductDto[];
    public type: string;
}
