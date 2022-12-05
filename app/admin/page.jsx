'use client';
import dynamic from 'next/dynamic';
import config from '../../cms/config';

const CMS = dynamic(
  async () => {
    const cms = await import('netlify-cms-app');
    cms.init({ config });
  },
  { ssr: false, loading: () => <p>Loading...</p> }
);

const AdminPage = () => {
  return <CMS />;
};

export default AdminPage;
