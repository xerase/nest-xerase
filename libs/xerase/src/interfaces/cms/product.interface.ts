import { CreateProduct, UpdateProduct } from '../../types/cms';

/**
 * @Controller('cms/product')
 *
 * @publicApi
 */
export interface ProductController {
  /**
   * @Post()
   *
   * @param body
   * @returns
   */
  createProduct: (body: CreateProduct) => any;
  /**
   * @Patch(':id')
   *
   * @param id
   * @param body
   * @returns
   */
  updateProduct: (id: number | string, body: UpdateProduct) => any;
  /**
   * @Delete(':id')
   *
   * @param id
   * @returns
   */
  deleteProduct: (id: number | string) => any;
  /**
   * @Get()
   *
   * @returns
   */
  getProducts: () => any;
  /**
   * @Get(slug/:slug)
   *
   * @param slug
   * @returns
   */
  getProductBySlug: (slug: string) => any;
  /**
   * @Get(':id')
   *
   * @param id
   * @returns
   */
  getProductById: (id: number | string) => any;
}
