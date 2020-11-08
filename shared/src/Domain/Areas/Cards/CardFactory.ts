import { Card } from './Card' 
import { CardFriendlyName } from '../Enums/CardFriendlyName' 
import { CardConstants } from './Constants/CardConstants' 
import { CashCard } from './CardTypes/CashCard';
import { ActionCard } from './CardTypes/ActionCard';
import { PropertyCard } from './CardTypes/PropertyCard';
import { CardType } from '../Enums/CardType';
import { CardColor } from '../Enums/CardColor';
import { Guid } from '../../../Utilities/Guid';
import { RentCard } from './CardTypes/RentCard';
import { ActionType } from '../Enums/ActionType';

export class CardFactory {

    createCardWithName(cardFriendlyName, title = null) {
        switch(cardFriendlyName) {
            
            /// Cash Cards
            
            case CardFriendlyName.Cash1M:
                return new CashCard(Guid.newGuid(), CardType.Cash, CardConstants.CardValues[cardFriendlyName])

            case CardFriendlyName.Cash2M:
                return new CashCard(Guid.newGuid(), CardType.Cash, CardConstants.CardValues[cardFriendlyName])

            case CardFriendlyName.Cash3M:
                return new CashCard(Guid.newGuid(), CardType.Cash, CardConstants.CardValues[cardFriendlyName])
                
            case CardFriendlyName.Cash4M:
                return new CashCard(Guid.newGuid(), CardType.Cash, CardConstants.CardValues[cardFriendlyName])

            case CardFriendlyName.Cash5M:
                return new CashCard(Guid.newGuid(), CardType.Cash, CardConstants.CardValues[cardFriendlyName]) 

            case CardFriendlyName.Cash10M:
                return new CashCard(Guid.newGuid(), CardType.Cash, CardConstants.CardValues[cardFriendlyName])

            /// Action Cards

            case CardFriendlyName.ActionDealBreaker:
                return new ActionCard(Guid.newGuid(), CardType.Action, CardConstants.CardValues[cardFriendlyName], ActionType.DealBreaker);

            case CardFriendlyName.ActionJustSayNo:
                return new ActionCard(Guid.newGuid(), CardType.Action, CardConstants.CardValues[cardFriendlyName], ActionType.SayNo);

            case CardFriendlyName.ActionPassGo:
                return new ActionCard(Guid.newGuid(), CardType.Action, CardConstants.CardValues[cardFriendlyName], ActionType.PassGo);
                    
            case CardFriendlyName.ActionForcedDeal:
                return new ActionCard(Guid.newGuid(), CardType.Action, CardConstants.CardValues[cardFriendlyName], ActionType.ForcedDeal);

            case CardFriendlyName.ActionSilyDeal:
                return new ActionCard(Guid.newGuid(), CardType.Action, CardConstants.CardValues[cardFriendlyName], ActionType.SilyDeal);

            case CardFriendlyName.ActionDebtCollector:
                return new ActionCard(Guid.newGuid(), CardType.Action, CardConstants.CardValues[cardFriendlyName], ActionType.DebtCollector);

            case CardFriendlyName.ActionItsMyBirthday:
                return new ActionCard(Guid.newGuid(), CardType.Action, CardConstants.CardValues[cardFriendlyName], ActionType.Birthday);

            case CardFriendlyName.ActionDoubleTheRent:
                return new ActionCard(Guid.newGuid(), CardType.Action, CardConstants.CardValues[cardFriendlyName], ActionType.DoubleRent);

            case CardFriendlyName.ActionHouse:
                return new ActionCard(Guid.newGuid(), CardType.Action, CardConstants.CardValues[cardFriendlyName], ActionType.House);

            case CardFriendlyName.ActionHotel:
                return new ActionCard(Guid.newGuid(), CardType.Action, CardConstants.CardValues[cardFriendlyName], ActionType.Hotel);
                
            /// Rent Cards

            case CardFriendlyName.RentBlueAndGreen:
                return new RentCard(Guid.newGuid(), CardType.Action, CardConstants.CardValues[cardFriendlyName], ActionType.PayRent, [CardColor.Blue, CardColor.Green]);

            case CardFriendlyName.RentRedAndYellow:
                return new RentCard(Guid.newGuid(), CardType.Action, CardConstants.CardValues[cardFriendlyName], ActionType.PayRent, [CardColor.Red, CardColor.Yellow]);

            case CardFriendlyName.RentPinkAndOrange:
                return new RentCard(Guid.newGuid(), CardType.Action, CardConstants.CardValues[cardFriendlyName], ActionType.PayRent, [CardColor.Pink, CardColor.Orange]);
                
            case CardFriendlyName.RentLightBlueAndBrown:
                return new RentCard(Guid.newGuid(), CardType.Action, CardConstants.CardValues[cardFriendlyName], ActionType.PayRent, [CardColor.LightBlue, CardColor.Brown]);
                
            case CardFriendlyName.RentRailroadAndUtility:
                return new RentCard(Guid.newGuid(), CardType.Action, CardConstants.CardValues[cardFriendlyName], ActionType.PayRent, [CardColor.RailRoad, CardColor.Utilities]);
                
            case CardFriendlyName.RentWildRent:
                return new RentCard(Guid.newGuid(), CardType.Action, CardConstants.CardValues[cardFriendlyName], ActionType.PayRent, this.allColors());
                
            /// Property Cards

            case CardFriendlyName.PropertyBlue:
                return new PropertyCard(Guid.newGuid(), CardType.Property, CardConstants.CardValues[cardFriendlyName], CardColor.Blue, title);

            case CardFriendlyName.PropertyBrown:
                return new PropertyCard(Guid.newGuid(), CardType.Property, CardConstants.CardValues[cardFriendlyName], CardColor.Brown, title);

            case CardFriendlyName.PropertyGreen:
                return new PropertyCard(Guid.newGuid(), CardType.Property, CardConstants.CardValues[cardFriendlyName], CardColor.Green, title);

            case CardFriendlyName.PropertyLightBlue:
                return new PropertyCard(Guid.newGuid(), CardType.Property, CardConstants.CardValues[cardFriendlyName], CardColor.LightBlue, title);

            case CardFriendlyName.PropertyOrange:
                return new PropertyCard(Guid.newGuid(), CardType.Property, CardConstants.CardValues[cardFriendlyName], CardColor.Orange, title);

            case CardFriendlyName.PropertyPink:
                return new PropertyCard(Guid.newGuid(), CardType.Property, CardConstants.CardValues[cardFriendlyName], CardColor.Pink, title);

            case CardFriendlyName.PropertyRailroad:
                return new PropertyCard(Guid.newGuid(), CardType.Property, CardConstants.CardValues[cardFriendlyName], CardColor.RailRoad, title);

            case CardFriendlyName.PropertyRed:
                return new PropertyCard(Guid.newGuid(), CardType.Property, CardConstants.CardValues[cardFriendlyName], CardColor.Red, title);

            case CardFriendlyName.PropertyUtility:
                return new PropertyCard(Guid.newGuid(), CardType.Property, CardConstants.CardValues[cardFriendlyName], CardColor.Utilities, title);

            case CardFriendlyName.PropertyYellow:
                return new PropertyCard(Guid.newGuid(), CardType.Property, CardConstants.CardValues[cardFriendlyName], CardColor.Yellow, title);

            // Property Wildcards

            case CardFriendlyName.PropertyWildCardBlueGreen:
                return new PropertyCard(Guid.newGuid(), CardType.Property, CardConstants.CardValues[cardFriendlyName], [CardColor.Blue, CardColor.Green], "Wild Card");

            case CardFriendlyName.PropertyWildCardGreenRailroad:
                return new PropertyCard(Guid.newGuid(), CardType.Property, CardConstants.CardValues[cardFriendlyName], [CardColor.RailRoad, CardColor.Green], "Wild Card");

            case CardFriendlyName.PropertyWildCardUtilityRailroad:
                return new PropertyCard(Guid.newGuid(), CardType.Property, CardConstants.CardValues[cardFriendlyName], [CardColor.Utilities, CardColor.RailRoad], "Wild Card");

            case CardFriendlyName.PropertyWildCardLightBlueRailroad:
                return new PropertyCard(Guid.newGuid(), CardType.Property, CardConstants.CardValues[cardFriendlyName], [CardColor.LightBlue, CardColor.RailRoad], "Wild Card");

            case CardFriendlyName.PropertyWildCardLightBlueBrown:
                return new PropertyCard(Guid.newGuid(), CardType.Property, CardConstants.CardValues[cardFriendlyName], [CardColor.LightBlue, CardColor.Brown], "Wild Card");

            case CardFriendlyName.PropertyWildCardPinkOrange:
                return new PropertyCard(Guid.newGuid(), CardType.Property, CardConstants.CardValues[cardFriendlyName], [CardColor.Pink, CardColor.Orange], "Wild Card");

            case CardFriendlyName.PropertyWildCardRedYellow:
                return new PropertyCard(Guid.newGuid(), CardType.Property, CardConstants.CardValues[cardFriendlyName], [CardColor.Red, CardColor.Yellow], "Wild Card");

            case CardFriendlyName.PropertyWildCardMulticolor:
                return new PropertyCard(Guid.newGuid(), CardType.Property, CardConstants.CardValues[cardFriendlyName], this.allColors, "Wild Card");
                
        }
    }

    allColors() {
        return Object.keys(CardColor).map((item) => {
            return CardColor[item];
        });
    }
}