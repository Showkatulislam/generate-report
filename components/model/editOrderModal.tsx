import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputField from "@/components/Inputs/InputField";
import DropDownField from "@/components/Inputs/DropDownField";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/modeStore";
import { priority } from "@/public/dropdownData";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useEffect } from "react";
const formSchema = z.object({
  clientId: z.string().min(1, {
    message: "Please Select Client.",
  }),
  productId: z.string().min(1, {
    message: "Please Select Product.",
  }),
  dob: z.string({
    required_error: "A date of birth is required.",
  }),
  priority: z.string().min(1, {
    message: "Please Select Product.",
  }),
});

export const EditOrderModal = () => {
  const router = useRouter();
  const { data,isOpen,type,onClose } = useModal();
  const isModalOpen=isOpen && type=="editOrder"
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientId: "",
      productId: "",
      dob: "",
      priority: "",
    },
  });
  useEffect(() => {
    if (data.order) {
      form.setValue("clientId", data.order.clientId);
      form.setValue("productId", data.order.productId);
      form.setValue("dob", data.order?.dob);
      form.setValue("priority", data.order.priority);
    }
  }, [form, data]);
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      axios.post("/api/order", values);
      toast.success("Order added successfully");
      router.refresh();
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="pt-3 px-5">
          <DialogTitle className="text-center text-2xl">
            Edit Client
          </DialogTitle>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <DropDownField
                type3={true}
                type3Items={data.clients}
                name="clientId"
                placeholder="Client"
                form={form}
              />
              <DropDownField
                type2={true}
                type2Items={data.products}
                name="productId"
                placeholder="Product"
                form={form}
              />
              <InputField name="dob" placeholder="Date=22/3/2000" form={form} />
              <DropDownField
                type1={true}
                items={priority}
                name="priority"
                placeholder="Priority"
                form={form}
              />
              <Button type="submit" disabled={isLoading} size="lg">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
