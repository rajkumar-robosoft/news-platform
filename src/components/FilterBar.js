import React, { useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';

const FilterBar = ({ authors, categories, articleTypes, tags, onFilterChange }) => {
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedArticleType, setSelectedArticleType] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const handleFilterChange = (filterType, value) => {
    const updatedFilters = {
      author: selectedAuthor,
      category: selectedCategory,
      articleType: selectedArticleType,
      tag: selectedTag,
    };

    switch (filterType) {
      case 'author':
        setSelectedAuthor(value);
        updatedFilters.author = value;
        break;
      case 'category':
        setSelectedCategory(value);
        updatedFilters.category = value;
        break;
      case 'articleType':
        setSelectedArticleType(value);
        updatedFilters.articleType = value;
        break;
      case 'tag':
        setSelectedTag(value);
        updatedFilters.tag = value;
        break;
      default:
        break;
    }

    onFilterChange({
      author: updatedFilters.author || null,
      category: updatedFilters.category || null,
      articleType: updatedFilters.articleType || null,
      tag: updatedFilters.tag || null,
    });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mb: 4, alignItems: 'center' }}>
      <Typography variant="h6">Filters</Typography>

      {/* Author Filter */}
      <FormControl fullWidth variant="outlined">
        <InputLabel>Author</InputLabel>
        <Select
          value={selectedAuthor}
          onChange={(e) => handleFilterChange('author', e.target.value)}
          label="Author"
        >
          <MenuItem value=""><em>All</em></MenuItem>
          {authors.map((author) => (
            <MenuItem key={author.id} value={author.id}>{author.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Category Filter */}
      <FormControl fullWidth variant="outlined">
        <InputLabel>Category</InputLabel>
        <Select
          value={selectedCategory}
          onChange={(e) => handleFilterChange('category', e.target.value)}
          label="Category"
        >
          <MenuItem value=""><em>All</em></MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Article Type Filter */}
      <FormControl fullWidth variant="outlined">
        <InputLabel>Article Type</InputLabel>
        <Select
          value={selectedArticleType}
          onChange={(e) => handleFilterChange('articleType', e.target.value)}
          label="Article Type"
        >
          <MenuItem value=""><em>All</em></MenuItem>
          {articleTypes.map((type) => (
            <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Tag Filter */}
      <FormControl fullWidth variant="outlined">
        <InputLabel>Tag</InputLabel>
        <Select
          value={selectedTag}
          onChange={(e) => handleFilterChange('tag', e.target.value)}
          label="Tag"
        >
          <MenuItem value=""><em>All</em></MenuItem>
          {tags.map((tag) => (
            <MenuItem key={tag} value={tag}>#{tag}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterBar;
