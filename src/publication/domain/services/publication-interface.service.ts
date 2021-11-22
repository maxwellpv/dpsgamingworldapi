import { Publication } from '../entities/publication.entity';

export interface PublicationsInterfaceService {
  findAll(): Promise<Publication[]>;
  findOne(id: string): Promise<Publication>;
  createPublication(publication: Publication);
  updatePublication(id: string, publication: Publication): Promise<Publication>;
}
