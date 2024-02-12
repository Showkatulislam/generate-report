"use client";

import { useEffect, useState } from "react";
import DemoModel from "../model/demoModel";
import { DeleteProductModal } from "../model/deleteProductModal";
import { EditClientModel } from "../model/editClientModal";
import { DeleteClientModal } from "../model/deleteClientModal";
import { EditOrderModal } from "../model/editOrderModal";
import { DeleteOrderModal } from "../model/deleteOrderModal";

const ModelProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <DemoModel />
      <DeleteProductModal />
      <EditClientModel />
      <DeleteClientModal />
      <EditOrderModal />
      <DeleteOrderModal />
    </>
  );
};

export default ModelProvider;
