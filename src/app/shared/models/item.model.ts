import { DocumentData } from '@angular/fire/compat/firestore';
import { Tag } from './tag.model';

export interface Item {
  id?: string;
  color: string;
  name: string;
  description?: string;
  banner?: string;
  icon?: string;
  tags: Tag[];
}

export interface ItemDocumentData extends DocumentData {
  id?: string;
  color: string;
  name: string;
  description?: string;
  banner?: string;
  icon?: string;
  tags: string[];
}
