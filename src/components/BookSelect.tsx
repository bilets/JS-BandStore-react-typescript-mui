import { useEffect, useState, ChangeEvent } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

interface BookSelectProps {
  selectBooks: (selectedValue: number) => void;
}

export default function BookSelect({ selectBooks }: BookSelectProps) {
  const [bookSelect, setBookSelect] = useState<number>(1);

  useEffect(() => {
    selectBooks(bookSelect);
  }, [bookSelect, selectBooks]);

  const handleSelectChange = (e: ChangeEvent<{ value: unknown }>) => {
    setBookSelect(e.target.value as number);
  };

  return (
    <FormControl
      fullWidth
      variant="standard"
      sx={{ bgcolor: 'white', m: 1, minWidth: 200 }}
    >
      <InputLabel id="book-select-label">Select Book</InputLabel>
      <Select
        labelId="book-select-label"
        value={bookSelect}
        onChange={handleSelectChange}
        label="Select Book"
      >
        <MenuItem value={1}>All</MenuItem>
        <MenuItem value={2}>
          0 {'<'} price {'<'} 15
        </MenuItem>
        <MenuItem value={3}>
          15 {'<'} price {'<'} 30
        </MenuItem>
        <MenuItem value={4}>price {'>'} 30</MenuItem>
      </Select>
    </FormControl>
  );
}
