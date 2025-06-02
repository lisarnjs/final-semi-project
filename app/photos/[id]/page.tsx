import PhotoDetails from "@/components/PhotoDetails";
import { getPhoto } from "@/lib/fakeImageApi";
import { Photo } from "@/types/photo";
import { notFound, useParams } from "next/navigation";

interface PhotoPageProps {
  params: {
    id: string;
  };
}

const PhotoPage = async ({ params }: PhotoPageProps) => {
  const response = await getPhoto(params.id);

  if (response.status === 404) {
    notFound();
  }

  const photo = (await response.json()) as Photo;

  return (
    <PhotoDetails
      src={photo.download_url}
      alt={photo.author}
      photographer={{
        name: photo.author,
      }}
    />
  );
};

export default PhotoPage;
