import axios from "axios";
import { observable } from "mobx";

interface Item {
    lng: number;
    lat: number;
    type: number;
    isChecked: boolean;
}

export interface IFilter {
    name: string;
    type: number;
    isChecked: boolean;
    icon?: any;
}

class FilterStore {
    @observable public filters: IFilter[] = [
        { name: "Vol de véhicule à moteur", type: 0, isChecked: true },
        { name: "Vols qualifiés", type: 1, isChecked: true },
        { name: "Introduction", type: 2, isChecked: true },
        { name: "Méfait", type: 3, isChecked: true },
        { name: "Vol dans / sur véhicule à moteur", type: 4, isChecked: true },
        { name: "Infractions entrainant la mort", type: 5, isChecked: true }
    ];
    @observable public radius: number = Math.pow(12, 1.2);
    @observable public data: Item[] = [];

    public constructor() {
        axios.defaults.baseURL = 'http://localhost:4000/api/';
    }

    public async load() {
        const serverData = await axios.get(`crimes/2018`);
        this.data = serverData.data;
        this.data.forEach(x => x.isChecked = true);
    }

    public applyFilter(type: number) {
        const filter = filterStore.filters.find(x => x.type === type);
        if (filter) {
            filter.isChecked = !filter.isChecked;
            this.data.filter(x => x.type === type).forEach(x => {
                x.isChecked = filter.isChecked;
            });
            this.data = this.data.slice();
        }
        console.log(this.data.filter(x => x.isChecked).length)
    }
}

const filterStore = new FilterStore();
export default filterStore;