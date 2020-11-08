import { Entity } from '../Entity'
import { Stack } from './Stack' 
import { Guid } from '../../../Utilities/Guid' 

export class Board extends Entity {
    Name: string;
    Id: string;
    Stack: Stack;

    constructor(id) {
        super(id);
        this.Stack = new Stack(Guid.newGuid());
    }
}