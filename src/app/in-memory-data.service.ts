import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 11, name: 'Genji' },
        { id: 12, name: 'Anna' },
        { id: 13, name: 'Reinhardt' },
        { id: 14, name: 'Widowmaker' },
        { id: 15, name: 'Mei' },
        { id: 16, name: 'Zarya' },
        { id: 17, name: 'Zenyatta' },
        { id: 18, name: 'Sombra' },
        { id: 19, name: 'McCree' },
        { id: 20, name: 'Winston' }
    ];
    return {heroes};
  }
}