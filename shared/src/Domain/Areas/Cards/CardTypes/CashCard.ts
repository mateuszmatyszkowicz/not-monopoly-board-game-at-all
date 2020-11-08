import { ActionType } from '../../Enums/ActionType' 
import { Card } from '../Card' 

export class CashCard extends Card {
    ActionType: ActionType;

    constructor(id, cardType, value) {
        super(id, cardType, value);
    }
}