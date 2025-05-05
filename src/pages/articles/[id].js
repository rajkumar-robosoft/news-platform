import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container, Typography, Box, Avatar, Button, CircularProgress, Chip } from '@mui/material';

export default function ArticleDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchArticle = async () => {
            try {
                const res = await fetch(`/api/articles/${id}`);
                const data = await res.json();
                if (data.status === 1) {
                    setArticle(data.data);
                } else {
                    setArticle(null);
                }
            } catch (error) {
                console.error('Error fetching article:', error);
                setArticle(null);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) return <CircularProgress sx={{ display: 'block', margin: 'auto', marginTop: '20px' }} />;
    if (!article) return <Typography variant="h6" color="error" align="center">Article not found</Typography>;

    return (
        <Container maxWidth="md" sx={{ paddingTop: 4 }}>
            {/* Title */}
            <Typography variant="h3" fontWeight="bold" gutterBottom>
                {article.title}
            </Typography>

            {/* Subtitle */}
            {article.subtitle && (
                <Typography variant="h5" color="textSecondary" paragraph>
                    {article.subtitle}
                </Typography>
            )}

            {/* Hero Image */}
            {article.hero && (
                <Box sx={{ width: '100%', height: 'auto', borderRadius: 2, mb: 4 }}>
                    <img
                        src={article.hero}
                        alt={article.title}
                        style={{ width: '100%', borderRadius: '8px' }}
                    />
                </Box>
            )}

            {/* Author & Published Date */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 6, color: 'text.secondary' }}>
                {article.author?.authorImage && (
                    <Avatar src={article.author.authorImage} alt={article.author.authorName} sx={{ width: 40, height: 40, mr: 2 }} />
                )}
                <Box>
                    <Typography variant="body2">{article.author?.authorName}</Typography>
                    <Typography variant="body2">{article.published}</Typography>
                </Box>
            </Box>

            {/* Description / Media */}
            <Box>
                {article.articleType === '1' && (
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ whiteSpace: 'pre-line' }}
                        dangerouslySetInnerHTML={{ __html: article.description }}
                    />
                )}

                {article.articleType === '2' && article.mediaURL && (
                    <video controls style={{ width: '100%', borderRadius: '8px' }}>
                        <source src={article.mediaURL} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </Box>

            {/* Tags */}
            {article.tags?.length > 0 && (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 4 }}>
                    {article.tags.map((tag) => (
                        <Button
                            key={tag}
                            variant="outlined"
                            size="small"
                            color="primary"
                            onClick={() => router.push(`/?tag=${tag}`)}
                        >
                            #{tag}
                        </Button>
                    ))}
                </Box>
            )}
        </Container>
    );
}
