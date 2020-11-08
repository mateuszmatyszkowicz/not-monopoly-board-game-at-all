
import { Entity } from '../Entity';
import { CardType } from '../Enums/CardType' 

export class Card extends Entity {
    Type: CardType;
    Value: number;

    constructor(id, type, value){
        super(id);
        this.Type = type;
        this.Value = value
    }
}