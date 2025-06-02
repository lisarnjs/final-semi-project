// components/DeleteButton.tsx
import { deletePost } from "@/lib/fakePostsApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type Props = {
  postId: number;
};

export default function DeleteButton({ postId }: Props) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: () => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      alert("삭제되었습니다.");
      router.push("/");
    },
  });

  return (
    <button
      onClick={() => mutation.mutate()}
      disabled={mutation.isPending}
      className="bg-slate-400 text-white text-md px-4 py-2 rounded cursor-pointer hover:bg-slate-500 transition-all duration-300"
    >
      삭제
    </button>
  );
}
