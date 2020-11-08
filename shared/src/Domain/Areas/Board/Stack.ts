import { Entity } from '../Entity'
import { Card } from '../Cards/Card' 
import { CardFriendlyName } from '../Enums/CardFriendlyName' 
import { CardType } from '../Enums/CardType' 
import { CardColor } from '../Enums/CardColor' 
import { PropertyCard } from '../Cards/CardTypes/PropertyCard' 
import { CashCard } from '../Cards/CardTypes/CashCard' 
import { CardFactory } from '../Cards/CardFactory' 
import { ActionCard } from '../Cards/CardTypes/ActionCard';
import { Guid } from '../../../Utilities/Guid';

export class Stack extends Entity {
    Cards: Array<Card> 

    constructor(id) {
        super(id);
        this.fill();
        this.shuffle();
    }

    fill(){
        this.addCashCards();
        this.addActionCards();
        this.addRentCards();
        this.addPropertyCards();
        this.addWildCards();
    }

    addCards(cardFriendlyName, number, title = null){
        let cardFactory = new CardFactory();
        for(let i = 0; i < number; i++){
            this.Cards.push(cardFactory.createCardWithName(cardFriendlyName, title));
        }
    }

    shuffle(){
        var j, x, i;
        for (i = this.Cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = this.Cards[i];
            this.Cards[i] = this.Cards[j];
            this.Cards[j] = x;
        }
    }
    
    addCashCards() {
        this.addCards(CardFriendlyName.Cash1M, 6);
        this.addCards(CardFriendlyName.Cash2M, 5);
        this.addCards(CardFriendlyName.Cash3M, 4);
        this.addCards(CardFriendlyName.Cash4M, 3);
        this.addCards(CardFriendlyName.Cash5M, 2);
        this.addCards(CardFriendlyName.Cash10M,1);
    }

    addActionCards() {
        this.addCards(CardFriendlyName.ActionDealBreaker, 2);
        this.addCards(CardFriendlyName.ActionJustSayNo, 3);
        this.addCards(CardFriendlyName.ActionPassGo, 10);
        this.addCards(CardFriendlyName.ActionForcedDeal, 3);
        this.addCards(CardFriendlyName.ActionSilyDeal, 3);
        this.addCards(CardFriendlyName.ActionDebtCollector, 3);
        this.addCards(CardFriendlyName.ActionItsMyBirthday, 3);
        this.addCards(CardFriendlyName.ActionDoubleTheRent, 2);
        this.addCards(CardFriendlyName.ActionHouse, 3);
        this.addCards(CardFriendlyName.ActionHotel, 2);
    }

    addRentCards() {
        this.addCards(CardFriendlyName.RentBlueAndGreen, 2);
        this.addCards(CardFriendlyName.RentLightBlueAndBrown, 2);
        this.addCards(CardFriendlyName.RentPinkAndOrange, 2);
        this.addCards(CardFriendlyName.RentRailroadAndUtility, 2);
        this.addCards(CardFriendlyName.RentRedAndYellow, 2);
        this.addCards(CardFriendlyName.RentWildRent, 3);
    }

    addWildCards() {
        this.addCards(CardFriendlyName.PropertyWildCardLightBlueRailroad, 1);
        this.addCards(CardFriendlyName.PropertyWildCardBlueGreen, 1);
        this.addCards(CardFriendlyName.PropertyWildCardGreenRailroad, 1);
        this.addCards(CardFriendlyName.PropertyWildCardUtilityRailroad, 1);
        this.addCards(CardFriendlyName.PropertyWildCardLightBlueBrown, 1);
        this.addCards(CardFriendlyName.PropertyWildCardPinkOrange, 2);
        this.addCards(CardFriendlyName.PropertyWildCardRedYellow, 2);
        this.addCards(CardFriendlyName.PropertyWildCardMulticolor, 2);
    }

    addPropertyCards() {
        this.addCards(CardFriendlyName.PropertyBlue, 1, 'Broad Walk');
        this.addCards(CardFriendlyName.PropertyBlue, 1, 'Park Place');
        this.addCards(CardFriendlyName.PropertyGreen, 1, 'North California Avenue');
        this.addCards(CardFriendlyName.PropertyGreen, 1, 'Pacific Avenue');
        this.addCards(CardFriendlyName.PropertyGreen, 1, 'Pennsylvania Avenue');
        this.addCards(CardFriendlyName.PropertyLightBlue, 1, 'Connecticut Avenue');
        this.addCards(CardFriendlyName.PropertyLightBlue, 1, 'Oriental Avenue');
        this.addCards(CardFriendlyName.PropertyLightBlue, 1, 'Vermont Avenue');
        this.addCards(CardFriendlyName.PropertyPink, 1, 'St. Charles Place');
        this.addCards(CardFriendlyName.PropertyPink, 1, 'Virginia Avenue');
        this.addCards(CardFriendlyName.PropertyPink, 1, 'States Avenue');
        this.addCards(CardFriendlyName.PropertyRailroad, 1, 'Short Line');
        this.addCards(CardFriendlyName.PropertyRailroad, 1, 'B. & O. Railroad');
        this.addCards(CardFriendlyName.PropertyRailroad, 1, 'Reading Railroad');
        this.addCards(CardFriendlyName.PropertyRailroad, 1, 'Pennsylvania Railroad');
        this.addCards(CardFriendlyName.PropertyOrange, 1, 'New York Avenue');
        this.addCards(CardFriendlyName.PropertyOrange, 1, 'St. James Place');
        this.addCards(CardFriendlyName.PropertyOrange, 1, 'Tennessee Avenue');
        this.addCards(CardFriendlyName.PropertyRed, 1, 'Kentucky Avenue');
        this.addCards(CardFriendlyName.PropertyRed, 1, 'Indiana Avenue');
        this.addCards(CardFriendlyName.PropertyRed, 1, 'Illinois Avenue');
        this.addCards(CardFriendlyName.PropertyBrown, 1, 'Mediterranean Avenue');
        this.addCards(CardFriendlyName.PropertyBrown, 1, 'Baltic Avenue');
        this.addCards(CardFriendlyName.PropertyUtility, 1, 'Water Works');
        this.addCards(CardFriendlyName.PropertyUtility, 1, 'Electric Company');
        this.addCards(CardFriendlyName.PropertyYellow, 1, 'Ventnor Avenue');
        this.addCards(CardFriendlyName.PropertyYellow, 1, 'Marvin Gardens');
        this.addCards(CardFriendlyName.PropertyYellow, 1, 'Atlantic Avenue');
    }
}