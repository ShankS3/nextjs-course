import { useRouter } from 'next/router'

function PortfolioProjectPage() {
  const router = useRouter();
  const { projectid } = router.query;

  return (
    <h1>Portfolio Project Page</h1>
  )
}

export default PortfolioProjectPage;
