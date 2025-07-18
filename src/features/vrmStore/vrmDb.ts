import Dexie, { Table } from 'dexie';
import VrmDbModel from './vrmDbModel';

export class VrmDexie extends Dexie {
  vrms!: Table<VrmDbModel>;

  constructor() {
    super('MIYORAVrmDatabase');
    this.version(1).stores({
      vrms: 'hash' // Primary key and indexed props
    });
  }
}

export const db = new VrmDexie();