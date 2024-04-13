import type { Tag } from './tag.interface';

export interface Project {
  title: string;
  description: string;
  tags?: Tag[];
  imageUrl?: string;
  repositoryUrl?: string;
  demoUrl?: string;
}
