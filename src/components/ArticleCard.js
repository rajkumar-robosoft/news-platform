import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

export default function ArticleCard({ title, subtitle, hero }) {
  return (
    <Card
      sx={{
        display: 'flex',
        borderRadius: 2,
        boxShadow: 2,
        transition: 'all 0.3s',
        '&:hover': { boxShadow: 6 },
      }}
    >
      {/* Left Section: Hero Image */}
      <CardMedia
        component="img"
        sx={{
          width: '25%',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: 2,
        }}
        image={hero}
        alt={title}
      />
      {/* Right Section: Title and Subtitle */}
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 2 }}>
        <CardContent>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
