import { CardFriendlyName } from '../../Enums/CardFriendlyName' 
import { CardColor } from '../../Enums/CardColor' 

export class CardConstants {
    
    static CardValues = new Map([
        [CardFriendlyName.Cash1M, 1],
        [CardFriendlyName.Cash2M, 2],
        [CardFriendlyName.Cash3M, 3],
        [CardFriendlyName.Cash4M, 4],
        [CardFriendlyName.Cash5M, 5],
        [CardFriendlyName.Cash10M, 10],

        [CardFriendlyName.ActionDealBreaker, 5],
        [CardFriendlyName.ActionJustSayNo, 4],
        [CardFriendlyName.ActionPassGo, 1],
        [CardFriendlyName.ActionForcedDeal, 3],
        [CardFriendlyName.ActionSilyDeal, 3],
        [CardFriendlyName.ActionDebtCollector, 3],
        [CardFriendlyName.ActionItsMyBirthday, 2],
        [CardFriendlyName.ActionDoubleTheRent, 1],
        [CardFriendlyName.ActionHouse, 3],
        [CardFriendlyName.ActionHotel, 4],
        
        [CardFriendlyName.RentBlueAndGreen, 1],
        [CardFriendlyName.RentRedAndYellow, 1],
        [CardFriendlyName.RentPinkAndOrange, 1],
        [CardFriendlyName.RentLightBlueAndBrown, 1],
        [CardFriendlyName.RentRailroadAndUtility, 1],
        [CardFriendlyName.RentWildRent, 3],

        [CardFriendlyName.PropertyBlue, 4],
        [CardFriendlyName.PropertyBrown, 1],
        [CardFriendlyName.PropertyUtility, 2],
        [CardFriendlyName.PropertyGreen, 4],
        [CardFriendlyName.PropertyYellow, 3],
        [CardFriendlyName.PropertyRed, 3],
        [CardFriendlyName.PropertyOrange, 2],
        [CardFriendlyName.PropertyPink, 2],
        [CardFriendlyName.PropertyLightBlue, 1],
        [CardFriendlyName.PropertyRailroad, 2],

        [CardFriendlyName.PropertyWildCardBlueGreen, 4],
        [CardFriendlyName.PropertyWildCardGreenRailroad, 4],
        [CardFriendlyName.PropertyWildCardUtilityRailroad, 2],
        [CardFriendlyName.PropertyWildCardLightBlueRailroad, 4],
        [CardFriendlyName.PropertyWildCardLightBlueBrown, 1],
        [CardFriendlyName.PropertyWildCardPinkOrange, 2],
        [CardFriendlyName.PropertyWildCardRedYellow, 3],
        [CardFriendlyName.PropertyWildCardMulticolor, 0]
    ]);

    static PropertiesInSet = new Map([
        [CardColor.Blue, 2],
        [CardColor.Green, 3],
        [CardColor.Pink, 3],
        [CardColor.Red, 3],
        [CardColor.Yellow, 3],
        [CardColor.Orange, 3],
        [CardColor.Utilities, 2],
        [CardColor.RailRoad, 4],
        [CardColor.Brown, 2],
        [CardColor.LightBlue, 3],
        [CardColor.RailRoad, 4]
    ]);
}