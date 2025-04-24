import { useEffect } from 'react';
import { useRouter } from 'next/router';

const DownloadPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/api/download');
  }, [router]);

  return null;
};

export default DownloadPage;
