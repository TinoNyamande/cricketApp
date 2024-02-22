import React, { useState } from 'react';
import { Grid, IconButton } from '@mui/material';
import PlayerList ,{Player} from './PlayerLists';
import { AddCircle } from '@mui/icons-material';

interface IconContainerProps {}

const IconContainer: React.FC<IconContainerProps> = () => {
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);

  const handleIconClick = (icon: number) => {
    setSelectedIcon(icon);
  };

  const handlePlayerSelect = (playerInfo: Player) => {
    // Implement logic to replace icon with player information
    console.log('Selected player:', playerInfo);
  };

  return (
    <Grid container spacing={2}>
      {/* First row */}
      <Grid item xs={3}>
        <IconButton onClick={() => handleIconClick(1)}>
          <AddCircle/>
        </IconButton>
      </Grid>
      <Grid item xs={3}>
        <IconButton onClick={() => handleIconClick(2)}>
        <AddCircle/>
        </IconButton>
      </Grid>
      <Grid item xs={3}>
        <IconButton onClick={() => handleIconClick(3)}>
        <AddCircle/>
        </IconButton>
      </Grid>
      <Grid item xs={3}>
        <IconButton onClick={() => handleIconClick(4)}>
        <AddCircle/>
        </IconButton>
      </Grid>
      {/* Second row */}
      <Grid item xs={6}>
        <IconButton onClick={() => handleIconClick(5)}>
        <AddCircle/>
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <IconButton onClick={() => handleIconClick(6)}>
        <AddCircle/>
        </IconButton>
      </Grid>
      {/* Third row */}
      <Grid item xs={6}>
        <IconButton onClick={() => handleIconClick(7)}>
        <AddCircle/>
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <IconButton onClick={() => handleIconClick(8)}>
        <AddCircle/>
        </IconButton>
      </Grid>
      <AddCircle/>
      <Grid item xs={3}>
        <IconButton onClick={() => handleIconClick(9)}>
        <AddCircle/>
        </IconButton>
      </Grid>
      <Grid item xs={3}>
        <IconButton onClick={() => handleIconClick(10)}>
        <AddCircle/>
        </IconButton>
      </Grid>
      <Grid item xs={3}>
        <IconButton onClick={() => handleIconClick(11)}>
        <AddCircle/>
        </IconButton>
      </Grid>
      <Grid item xs={3}>
        {/* Empty grid item */}
      </Grid>
      
      {/* Display player list */}
      {selectedIcon && (
        <PlayerList
          icon={selectedIcon}
          onSelectPlayer={handlePlayerSelect}
        />
      )}
    </Grid>
  );
};

export default IconContainer;
