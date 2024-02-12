"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputField from "@/components/Inputs/InputField";
import DropDownField from "@/components/Inputs/DropDownField";
import {  priority } from "@/public/dropdownData";
import { Client, Product } from "@prisma/client";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

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

interface AddOrderProps {
  products: Product[] | null;
  clients: Client[] | null;
}

const AddOrder = ({ products, clients }: AddOrderProps) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientId: "",
      productId: "",
      dob: "",
      priority: "",
    },
  });
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <DropDownField
          type3={true}
          type3Items={clients}
          name="clientId"
          placeholder="Client"
          form={form}
        />
        <DropDownField
          type2={true}
          type2Items={products}
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
        <Button type="submit" size="lg">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AddOrder;
