import { useRouter } from 'next/router'

function BlogPostPage() {
  const router = useRouter;
  const { slug } = router.query;

  return (
    <h1>Blog Post Page</h1>
  )
}

export default BlogPostPage;
