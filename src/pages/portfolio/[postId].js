import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { performRequest } from '../../lib/datocms';
import Head from 'next/head';
import { Navbar } from '@nextui-org/react';
import Loader from '@/components/loader';
import Layout from '@/components/layout';
import Container from '@/components/container';
import Link from 'next/link';
import ReactImageGallery from 'react-image-gallery';
import PhotoAlbum from 'react-photo-album';
import { Gallery } from 'react-grid-gallery';

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
                                slug
                                gallery {url}
                                coverImage {url}
                            }
                        }
                    `;
                    const { data } = await performRequest({ query: query });
                    if (data.portfoliopost) {
                        setPost(data.portfoliopost);
                        console.log(data.portfoliopost)
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

    const transformedGallery = post.gallery.map(item => ({
        src: item.url,

        // thumbnail: item.url
    }));

    return (
        <Layout>

            <div className='flex w-full bg-black'>
                <div className='h-[100vh] w-1/3 bg-cover flex items-center justify-start' style={{ backgroundImage: `url(${post.coverImage.url})` }}>
                    <h1 className="transform -rotate-90 bg-dark-brown bg-opacity-50 w-full px-10 py-2 text-xl md:text-5xl">{post.title}</h1>

                </div>
                <div className='w-2/3 flex items-center'>
                    <div>
                        <Link href='/portfolio'>Back
                        </Link>

                        <p>{post.description}</p>

                        {/* <div className='w-1/2'> */}
                        <Gallery images={transformedGallery} />

                        {/* </div> */}

                    </div>
                </div>
            </div>


        </Layout>


    );
};

export default Post;
