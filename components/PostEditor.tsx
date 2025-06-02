// components/PostEditor.tsx
import { createPost, updatePost } from "@/lib/fakePostsApi";
import { Post } from "@/types/posts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

type PostEditorProps = {
  initialPost?: Post;
};

export default function PostEditor({ initialPost }: PostEditorProps) {
  const isEdit = !!initialPost;
  const [title, setTitle] = useState(initialPost?.title || "");
  const [body, setBody] = useState(initialPost?.body || "");
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (post: Post | Omit<Post, "id">) =>
      isEdit ? updatePost(post as Post) : createPost(post as Omit<Post, "id">),

    onSuccess: () => {
      alert(isEdit ? "수정 성공!" : "작성 성공!");
      queryClient.invalidateQueries({ queryKey: ["posts"] }); // 목록 갱신
      router.push("/");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEdit && initialPost) {
      mutation.mutate({
        ...initialPost,
        title,
        body,
      });
    } else {
      mutation.mutate({
        userId: 1,
        title,
        body,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="border p-2 w-full"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 w-full"
        placeholder="내용"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button
        type="submit"
        disabled={mutation.isPending}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isEdit ? "수정하기" : "작성하기"}
      </button>
      {mutation.error && (
        <p className="text-red-500">{(mutation.error as Error).message}</p>
      )}
    </form>
  );
}
