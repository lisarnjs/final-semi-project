import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";
import { getPhoto } from "@/lib/fakeImageApi";
import { Photo } from "@/types/photo";
import { notFound } from "next/navigation";

type PageParams = Promise<{ id: string }>;

const PhotoModalPage = async ({ params }: { params: PageParams }) => {
  const { id } = await params;
  const response = await getPhoto(id);

  if (response.status === 404) {
    notFound();
  }

  const photo = (await response.json()) as Photo;

  return (
    <Modal>
      <PhotoDetails
        src={photo.download_url}
        alt={photo.author}
        photographer={{
          name: photo.author,
        }}
      />
    </Modal>
  );
};

export default PhotoModalPage;
