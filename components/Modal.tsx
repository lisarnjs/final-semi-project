// app/components/Modal.tsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  const router = useRouter();

  const close = () => {
    router.back();
  };

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={close}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-[800px] overflow-y-scroll"
        onClick={(e) => e.stopPropagation()} // 모달 내용 클릭 시 닫힘 방지
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
