import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material';
import ArticleCard from '@src/components/ArticleCard'; // adjust path as needed
import Link from 'next/link';
import FilterBar from '@src/components/FilterBar';

const HomePage = () => {
    const [articles, setArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        author: null,
        category: null,
        articleType: null,
        tag: null,
    });

    const [filterOptions, setFilterOptions] = useState({
        authors: [],
        categories: [],
        articleTypes: [],
        tags: [],
    });

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('/api/articles');
                if (!response.ok) throw new Error('Failed to fetch articles');

                const data = await response.json();
                setArticles(data.data.articles);
                setFilteredArticles(data.data.articles); // initial load

                setFilterOptions({
                    authors: data.data.authors,
                    categories: data.data.categories,
                    articleTypes: data.data.articleTypes,
                    tags: data.data.tags,
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    const handleFilterChange = (selectedFilters) => {
        setFilters(selectedFilters);
    };

    useEffect(() => {
        const filtered = articles.filter((article) => {
            const matchAuthor = filters.author ? article.authorId === filters.author : true;
            const matchCategory = filters.category ? article.categoryId === filters.category : true;
            const matchType = filters.articleType ? article.articleType === filters.articleType : true;
            const matchTag = filters.tag ? article.tags.includes(filters.tag) : true;

            return matchAuthor && matchCategory && matchType && matchTag;
        });

        setFilteredArticles(filtered);
    }, [articles, filters]);

    if (loading) return <CircularProgress sx={{ display: 'block', margin: 'auto', marginTop: '20px' }} />;
    if (error) return <Typography color="error" variant="h6" align="center">Error: {error}</Typography>;

    return (
        <Container sx={{ paddingTop: 4 }}>
            {/* Title & Description */}
            <Box sx={{ textAlign: 'center', mb: 8}}>
                <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>
                    NewsNow – Stay Informed. Stay Ahead.
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Your one-stop destination for the latest articles across categories, authors, and topics. Filter, explore, and stay updated.
                </Typography>
            </Box>
            <FilterBar
                authors={filterOptions.authors}
                categories={filterOptions.categories}
                articleTypes={filterOptions.articleTypes}
                tags={filterOptions.tags}
                onFilterChange={handleFilterChange}
            />
            {filteredArticles.length === 0 ? (
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Typography variant="h6" color="text.secondary">
                        No articles found for the selected filters.
                    </Typography>
                </Box>
            ) : (
                <Grid container spacing={4}>
                    {filteredArticles.map((article) => (
                        <Grid item xs={12} sm={6} md={4} key={article.articleId}>
                            <Link href={`/articles/${article.articleId}`} passHref legacyBehavior>
                                <Box component="a" sx={{ display: 'block', textDecoration: 'none' }}>
                                    <ArticleCard {...article} />
                                </Box>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default HomePage;
