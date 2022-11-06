import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';

export default function Hello() {
  return (
    <Box>
      <Container maxWidth="lg">
        <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
          Hello, World!
        </Typography>
      </Container>
    </Box>
  );
}
