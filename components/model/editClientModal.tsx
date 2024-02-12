"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useModal } from "@/hooks/modeStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Form } from "@/components/ui/form";
import InputField from "@/components/Inputs/InputField";
import { useEffect } from "react";
import qs from "query-string";
import { useRouter } from "next/navigation";
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  phone: z.string().min(2, {
    message: "Phone must be at least 2 characters.",
  }),
  address: z.string().min(2, {
    message: "Adress must be at least 2 characters.",
  }),
  contact1: z.string().min(2, {
    message: "Contact1 must be at least 2 characters.",
  }),
  contact2: z.string().min(2, {
    message: "Contact2 must be at least 2 characters.",
  }),
});
export const EditClientModel = () => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const isModalOpen = isOpen && type == "editClient";
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      contact1: "",
      contact2: "",
    },
  });

  useEffect(() => {
    if (data.client) {
      form.setValue("name", data.client.name);
      form.setValue("email", data.client.email);
      form.setValue("phone", data.client.phone);
      form.setValue("address", data?.client?.address);
      form.setValue("contact1", data?.client?.contact1);
      form.setValue("contact2", data?.client?.contact2);
    }
  }, [form, data]);

  const loading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      const url = qs.stringifyUrl({
        url: `/api/client`,
        query: {
          clientId: data?.client?.id,
        },
      });
      await axios.patch(url, values);
      form.reset();
      router.refresh();
      onClose();
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
              <InputField
                disable={loading}
                name="name"
                placeholder="Name"
                form={form}
              />
              <InputField
                disable={loading}
                name="email"
                placeholder="Email"
                form={form}
              />
              <InputField
                disable={loading}
                name="phone"
                placeholder="Phone"
                form={form}
              />
              <InputField
                disable={loading}
                name="address"
                placeholder="Address"
                form={form}
              />
              <InputField
                disable={loading}
                name="contact1"
                placeholder="Contact1"
                form={form}
              />
              <InputField
                disable={loading}
                name="contact2"
                placeholder="Contact2"
                form={form}
              />
              <DialogFooter className="py-4 px-6">
                <div className="flex justify-between items-center w-full">
                  <Button onClick={onClose} variant="warning">
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary">
                    Save
                  </Button>
                </div>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
