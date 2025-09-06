"use client";

import { useModal } from "./ModalContext";
import LoginModal from "./Modals/LoginModal";
import ResetPasswordModal from "./Modals/ResetPasswordModal";

export default function ModalRenderer() {
  const { modalType, closeModal, modalProps } = useModal();

  if (!modalType) return null;

  switch (modalType) {
    case "login":
      return <LoginModal onClose={closeModal} {...modalProps} />;
    case "resetpassword":
      return <ResetPasswordModal onClose={closeModal} {...modalProps} />;
    default:
      return null;
  }
}
