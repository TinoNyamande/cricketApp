import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

export interface Player {
  id: number;
  name: string;
  team: string;
  price: string;
}

interface PlayerListProps {
  icon: number;
  onSelectPlayer: (playerInfo: Player) => void;
}

const PlayerList: React.FC<PlayerListProps> = ({ icon, onSelectPlayer }) => {
  const handlePlayerSelect = (player: Player) => {
    onSelectPlayer(player);
  };

  const samplePlayerData: Player[] = [
    { id: 1, name: 'Player 1', team: 'Team A', price: '$10M' },
    { id: 2, name: 'Player 2', team: 'Team B', price: '$8M' },
    { id: 3, name: 'Player 3', team: 'Team C', price: '$12M' },
    // Add more sample players as needed
  ];

  return (
    <List>
      {samplePlayerData.map((player) => (
        <ListItem key={player.id} button onClick={() => handlePlayerSelect(player)}>
          <ListItemText primary={player.name} secondary={`${player.team} - ${player.price}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default PlayerList;
