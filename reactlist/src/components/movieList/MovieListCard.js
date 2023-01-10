import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button  } from '@mui/material';
import { useNavigate } from "react-router-dom"

export default function MovieListCard({ id ,img, title, description, searchName, page }) {
    const navigate = useNavigate()

    const openMovieShower = () => {
      navigate(`/${id}?name=${searchName}&page=${page}`)
    }

    return (
      <Card onClick={ openMovieShower } sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={ img }
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2">
              { title }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Дата выхода: { description }
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Подробнее
         </Button>
      </CardActions>
      </Card>
    );
  }