import { useModal } from "@/hooks/modeStore";
import { Button } from "../ui/button";
import qs from "query-string";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import axios from "axios";
import { useRouter } from "next/navigation";

export const DeleteOrderModal = () => {
  const { type, isOpen, onClose, data } = useModal();
  const isModalOpen = isOpen && type == "deleteOrder";
  const router=useRouter()
  const url = qs.stringifyUrl({
    url: "/api/order",
    query: {
      orderId: data?.id,
    },
  });
  const handleProduct = async () => {
    try {
        await axios.delete(url)
        onClose()
        router.refresh()
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="pt-3 px-5">
          <DialogTitle className="text-center text-2xl">
            Are you want to delete this Order?
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="py-4 px-6">
          <div className="flex justify-between items-center w-full">
            <Button onClick={onClose} variant="warning">
              No
            </Button>
            <Button onClick={handleProduct} variant="primary">Yes</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
