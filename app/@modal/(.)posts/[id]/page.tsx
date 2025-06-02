import Modal from "@/components/Modal";
import PostDetail from "@/components/PostDetail";
import { notFound } from "next/navigation";

type PageParams = Promise<{ id: string }>;

const PhotoModalPage = async ({ params }: { params: PageParams }) => {
  const { id } = await params;
  const postId = Number(id);
  return (
    <Modal>
      <PostDetail postId={postId} />
    </Modal>
  );
};

export default PhotoModalPage;
