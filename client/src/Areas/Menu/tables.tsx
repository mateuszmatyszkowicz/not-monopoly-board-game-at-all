import * as React from "react";
import { Table } from "../../Shared/table";

var tables: { Name: string, players: number, maxPlayers: number }[] = [
  { Name: 'GG', players: 3, maxPlayers: 5 },
  { Name: 'First Game', players: 2, maxPlayers: 5 },
  { Name: 'Winning is for losers', players: 5, maxPlayers: 5 },
  { Name: 'Enjoy', players: 1, maxPlayers: 5 },
];

export const Tables = () => (
<div>
  <div className="w-2/3 mx-auto">
    <div className="bg-white shadow-md rounded my-6">
      <table className="text-left w-full border-collapse"> 
        <thead>
          <tr>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"></th>
          </tr>
        </thead>
        <tbody>
          {tables.map((table) => {        
                    return <Table name={table.Name} players={table.players} maxPlayers={table.maxPlayers}/>
                })}
        </tbody>
      </table>
    </div>
  </div>
</div>
);
