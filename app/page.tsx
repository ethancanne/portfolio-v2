import PocketBase from 'pocketbase';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto';

const getProjects = async () => {
  const db = new PocketBase('http://127.0.0.1:8090');
  const data = await db.collection('projects').getList();
  return data?.items as any[];
};

type Props = {};

export default async ({}: Props) => {
  const projects = await getProjects();
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};
