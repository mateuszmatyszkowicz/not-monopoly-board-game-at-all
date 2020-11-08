import { Entity } from '../Entity'
import { Card } from '../Cards/Card' 

export class Player extends Entity {
    Name: string;
    BoardCards:  Array<Card>;
    HandCards: Array<Card>
    BankCards: Array<Card>

    constructor(id, name) {
        super(id);
        this.Name = name;
    }
}