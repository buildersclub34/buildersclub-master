import { notFound } from 'next/navigation';
import { circleBuilders } from '@/data/circleBuilders';
import BuilderClient from '@/app/builders/[id]/BuilderClient';

export async function generateStaticParams() {
  return circleBuilders.map((builder) => ({
    id: builder.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const builder = circleBuilders.find(b => b.id === params.id);
  
  if (!builder) {
    return {
      title: 'Builder Not Found',
      description: 'The requested builder could not be found.',
    };
  }

  return {
    title: `${builder.name} | ${builder.role} at ${builder.company} | Builders Circle`,
    description: builder.bio || builder.description || `Learn more about ${builder.name}, ${builder.role} at ${builder.company}`,
    openGraph: {
      title: `${builder.name} | Builders Circle`,
      description: builder.bio || builder.description || `${builder.role} at ${builder.company}`,
      images: [
        {
          url: builder.image,
          width: 800,
          height: 600,
          alt: builder.name,
        },
      ],
    },
  };
}

export default function CircleBuilderPage({ params }: { params: { id: string } }) {
  const builder = circleBuilders.find(b => b.id === params.id);
  
  if (!builder) {
    notFound();
  }
  
  return <BuilderClient builder={builder} />;
}
