import { EventType } from '../../../shared/src/Domain/Areas/Enums/EventType';

export class EventHandler {
    
    handleMessage(message, connection, wsServer){
        const parsedMessage = JSON.parse(message.utf8Data);

        if(parsedMessage.event && parsedMessage.event.type){
          switch(parsedMessage.event.type) {
            case EventType.JoinBoard:
              wsServer.broadcast(message.utf8Data);
              break;
            case EventType.LeaveBoard:
              wsServer.broadcast(message.utf8Data);
              break;

            case EventType.TakeCards:
              wsServer.broadcast(message.utf8Data);
              break;

            case EventType.PlayCard:
                wsServer.broadcast(message.utf8Data);
                break;
          }
        }
    
        console.log(message);
    }

}