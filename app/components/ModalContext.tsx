"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ModalType = "login" | "resetpassword" | null;

interface ModalContextProps {
  modalType: ModalType;
  modalProps?: any;
  openModal: (type: ModalType, props?: any) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [modalProps, setModalProps] = useState<any>({});

  const openModal = (type: ModalType, props: any = {}) => {
    setModalType(type);
    setModalProps(props);
  };

  const closeModal = () => {
    setModalType(null);
    setModalProps({});
  };

  return (
    <ModalContext.Provider
      value={{ modalType, modalProps, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
