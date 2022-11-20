import { action, makeAutoObservable, observable } from "mobx"

export type TFilters = 'all' | 'done' | 'undone';

export const filterValues = [
    { name: 'all', label: 'All' },
    { name: 'done', label: 'Done' },
    { name: 'undone', label: 'Undone' }
]


class FilterStore {
    @observable filterType: TFilters = 'all';
    
    constructor() {
        makeAutoObservable(this);
    }

    @action setFilter(filter: TFilters) {
        this.filterType = filter;
    }
}

export default new FilterStore()