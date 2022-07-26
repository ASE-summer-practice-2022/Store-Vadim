import {makeAutoObservable} from "mobx";

import Pills from "../models/Pills";
import CardPills from "../models/CardPills";

export default class ItemStore {
    items: Pills[];

    count: number;

    constructor() {
        makeAutoObservable(this);
        this.items = [];
        this.count = 0;
    };

    setItem = (products: CardPills[]) => {
        this.items = products.map((product: CardPills) => new Pills(product));
    };

    setCount = (count: number) => {
        this.count = count;
    };

    createItem (product: CardPills) {
        const newItem = new Pills(product);
        this.items = [...this.items, newItem];
    };

    readItem(id: number) {
        return this.items.find((item: Pills) => item.id === id);
    }

    updateItem (product: Pills) {
        this.items = (this.items.map(item => (item.id === product.id ? product : item)));
    };

    deleteItem (id: number) {
        this.items = this.items.filter(item => item.id !== id);
    };
}