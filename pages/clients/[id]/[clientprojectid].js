import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
  const router = useRouter;
  const { id, clientprojectid } = router.query;

  return (
    <h1>Selected Client Project Page</h1>
  )
}

export default SelectedClientProjectPage;
