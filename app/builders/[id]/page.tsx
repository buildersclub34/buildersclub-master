import { notFound } from 'next/navigation';
import { featuredBuilders } from '@/data/builders';
import BuilderClient from './BuilderClient';

export default function BuilderPage({ params }: { params: { id: string } }) {
  const builder = featuredBuilders.find(b => b.id === params.id);
  
  if (!builder) {
    notFound();
  }
  
  return <BuilderClient builder={builder} />;
}

// Generate static params for all builders
export async function generateStaticParams() {
  return featuredBuilders.map((builder) => ({
    id: builder.id,
  }));
}

// Generate metadata for better SEO
export async function generateMetadata({ params }: { params: { id: string } }) {
  const builder = featuredBuilders.find(b => b.id === params.id);
  
  if (!builder) {
    return {
      title: 'Builder Not Found | The Builders Club',
      description: 'The builder you are looking for does not exist or has been removed.'
    };
  }

  return {
    title: `${builder.name} | ${builder.role} at ${builder.company} | The Builders Club`,
    description: builder.description || `Learn more about ${builder.name}, ${builder.role} at ${builder.company}.`,
    openGraph: {
      title: `${builder.name} | The Builders Club`,
      description: builder.description || `${builder.role} at ${builder.company}`,
      images: [
        {
          url: builder.image || '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: builder.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${builder.name} | The Builders Club`,
      description: builder.description || `${builder.role} at ${builder.company}`,
      images: [builder.image],
    },
  };
}
