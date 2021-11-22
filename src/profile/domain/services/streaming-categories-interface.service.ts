import { StreamingCategory } from '../entities/streaming-category.entity';

export interface StreamingCategoriesInterfaceService {
  create(streamingCategory: StreamingCategory): Promise<StreamingCategory>;

  findAll(): Promise<StreamingCategory[]>;

  findOne(id: number): Promise<StreamingCategory>;
}
