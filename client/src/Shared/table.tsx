import * as React from "react";

type TableProps = { name: string, players: number, maxPlayers: number};

export const Table = ({ name, players, maxPlayers}: TableProps) => (
    <tr className="hover:bg-grey-lighter">
        <td className="py-4 px-6 border-b border-grey-light">{name}</td>
        <td className="py-4 px-6 border-b border-grey-light">{players} / {maxPlayers}</td>
        <td className="py-4 px-6 border-b border-grey-light">
            <a href="#" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Join</a>
            <a href="#" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Spectate</a>
        </td>
    </tr>
);
