import { CardColor } from '../../Enums/CardColor' 
import { Card } from '../Card' 

export class PropertyCard extends Card {
    CardColors: Array<CardColor>
    Name: string

    constructor(id, cardType, value, colors, name) {
        super(id, cardType, value);
        this.CardColors = colors;
        this.Name = name;
    }
}