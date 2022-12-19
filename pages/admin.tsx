import dynamic from 'next/dynamic';
import config from '../cms/config';
import Page from '../layout/page/Page.layout';
import Head from 'next/head';

const CMS = (dynamic as any)(
  async () => {
    const cms = await import('netlify-cms-app');
    (cms as any).init({ config });
  },
  { ssr: false, loading: () => <p>Loading...</p> }
);

const AdminPage = () => {
  return (
    <div>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <CMS />
    </div>
  );
};

export default AdminPage;
