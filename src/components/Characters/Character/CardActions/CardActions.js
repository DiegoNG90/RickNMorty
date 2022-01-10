import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import './cardactions.css';
const Actions = ({ handleFavorite, favorite, handleExpandClick, expanded }) => {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <CardActions disableSpacing>
      <IconButton onClick={handleFavorite} aria-label="add to favorites">
        <FavoriteIcon
          data-testid="favorite-icon"
          className={favorite ? 'favorited__red' : 'unfavorited__white'}
        />
      </IconButton>
      <IconButton aria-label="share">{/* <ShareIcon /> */}</IconButton>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
  );
};

export default Actions;
