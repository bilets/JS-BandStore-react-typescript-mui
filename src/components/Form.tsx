import { useState, ChangeEvent } from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';

interface FormProps {
  addToCart: (item: { title: string; count: number; total: string }) => void;
  title: string;
  price: number;
  bookInCartCountHandler: (count: number) => void;
}

export default function Form({
  addToCart,
  title,
  price,
  bookInCartCountHandler,
}: FormProps) {
  const [count, setCount] = useState<number>(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1 && value <= 42) {
      setCount(value);
    } else {
      setCount(1);
    }
  };

  const total = (price * count).toFixed(2);

  const handleClick = () => {
    addToCart({ title, count, total });
    setCount(1);
    bookInCartCountHandler(count);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="body1">Price, $</Typography>
          <Typography variant="body2">{price.toFixed(2)}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Count"
            type="number"
            value={count}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1">Total price, $</Typography>
          <Typography variant="body2">{total}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
            fullWidth
          >
            Add to cart
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
