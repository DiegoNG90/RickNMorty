import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { getCharacterInitials, episodeFromUrl } from '../../../utils';
import Actions from './CardActions/CardActions';

const Character = ({ character }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const colors = [
  //   '#fded36',
  //   '#e6c92a',
  //   '#759d44',
  //   '#e3d3a0',
  //   '#eaa145',
  //   ,
  //   '#371b0f',
  // ];

  return (
    <Card
      sx={{ maxWidth: 345 }}
      data-testid="character-card"
      className="character"
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {getCharacterInitials(character.name)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={character.name}
        subheader={character.species}
        className="character__card-header"
      />
      <CardMedia
        component="img"
        height="350"
        image={character.image}
        alt={character.name}
      />
      <CardContent className="character__card-content">
        <Typography variant="body2" color="text.secondary">
          Location: {character.location.name} <br />
          Status: {character.status}
        </Typography>
      </CardContent>

      <Actions
        handleFavorite={handleFavorite}
        favorite={favorite}
        handleExpandClick={handleExpandClick}
        expanded={expanded}
      />

      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        className="character__card-actions"
      >
        <CardContent>
          <Typography paragraph>Useful URLS</Typography>

          <ul>
            <li> Character detailed info - {character.url} </li>
            <li>
              {' '}
              Appearing episodes -{' '}
              <ol>
                {character.episode.map((e) => {
                  return <li key={e}> {episodeFromUrl(e)} </li>;
                })}
              </ol>
            </li>
          </ul>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Character;
