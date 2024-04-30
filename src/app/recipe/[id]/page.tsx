import { useRouter } from 'next/navigation';
import { ReactElement } from 'react';

export default function RecipePage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Recipe ID: {params.id}</h1>
      {/* More code to display the recipe */}
    </div>
  );
}
