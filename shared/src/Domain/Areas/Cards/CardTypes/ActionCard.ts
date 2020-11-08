import { ActionType } from '../../Enums/ActionType' 
import { Card } from '../Card' 

export class ActionCard extends Card {
    ActionType: ActionType;

    constructor(id, cardType, value, actionType) {
        super(id, cardType, value);
        this.ActionType = actionType;
    }
}