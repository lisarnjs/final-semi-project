import Modal from "@/components/Modal";
import PostDetail from "@/components/PostDetail";
import { notFound } from "next/navigation";

interface PhotoModalPageProps {
  params: {
    id: string;
  };
}

const PhotoModalPage = async ({ params }: PhotoModalPageProps) => {
  const postId = Number(params.id);
  return (
    <Modal>
      <PostDetail postId={postId} />
    </Modal>
  );
};

export default PhotoModalPage;
