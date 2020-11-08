import { ActionCard } from './ActionCard' 
import { CardColor } from '../../Enums/CardColor' 

export class RentCard extends ActionCard {
    Colors: Array<CardColor> 

    constructor(id, cardType, value, actionType, colors: Array<CardColor>) {
        super(id, cardType, value, actionType);
        this.Colors = colors;
    }
}