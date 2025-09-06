"use client";

import { ModalProvider } from "./ModalContext";
import ModalRenderer from "./ModalRenderer";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      <ModalRenderer />
      <div>{children}</div>
    </ModalProvider>
  );
}
