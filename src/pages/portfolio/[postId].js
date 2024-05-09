import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { performRequest } from '../../lib/datocms';
import Head from 'next/head';
import { Navbar } from '@nextui-org/react';
import Loader from '@/components/loader';
import Layout from '@/components/layout';
import Container from '@/components/container';
import Link from 'next/link';

const Post = () => {

    const router = useRouter();
    const { postId } = router.query;
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (postId !== undefined) {
            setLoading(true);
            async function fetchData() {
                try {
                    const query = `
                        query {
                            portfoliopost(filter: { slug: { eq: "${postId}" } }) {
                                id
                                title
                                description
                            }
                        }
                    `;
                    const { data } = await performRequest({ query: query });
                    if (data.portfoliopost) {
                        setPost(data);
                    } else {
                        console.error('Post not found');
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                } finally {
                    setLoading(false);
                }
            }

            fetchData();
        }
    }, [postId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <Layout>

            <Container>
                <Link href='/portfolio'>Back
                </Link>
                <h1>{post.portfoliopost.title}</h1>
                <p>{post.portfoliopost.description}</p>
            </Container>
        </Layout>


    );
};

export default Post;
