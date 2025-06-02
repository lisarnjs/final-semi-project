"use client";

import DeleteButton from "@/components/DeleteButton";
import PostDetail from "@/components/PostDetail";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  if (!id)
    return (
      <p>
        id를 찾을 수 없습니다.
        <button onClick={() => router.push("/")}>go home</button>
      </p>
    );

  const postId = Number(id);

  if (isNaN(postId)) return <p>유효하지 않은 게시글 ID입니다.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <PostDetail postId={postId} />

      <div className="flex p-4 justify-end">
        <Link
          href={`/posts/${postId}/edit`}
          className="bg-blue-600 text-white text-md px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition-all duration-300 mr-4"
        >
          수정
        </Link>
        <DeleteButton postId={postId} />
      </div>
    </div>
  );
}
