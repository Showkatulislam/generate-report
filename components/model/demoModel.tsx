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
import DropDownField from "@/components/Inputs/DropDownField";
import { countries, languages } from "@/public/dropdownData";
import { useEffect } from "react";
import qs from 'query-string'
import { useRouter } from "next/navigation";
const formSchema = z.object({
  productName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  country: z.string().min(2, {
    message: "Country must be Select",
  }),
  language: z.string().min(2, {
    message: "Language must be Select",
  }),
  price: z.string().min(1, {
    message: "Price not fill",
  }),
});
const DemoModel = () => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const isModalOpen = isOpen && type == "editProduct";
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      country: "",
      language: "",
      price: "",
    },
  });

  useEffect(() => {
    if (data.product) {
      form.setValue("productName", data.product.productName);
      form.setValue("country", data.product.country);
      form.setValue("language", data.product.language);
      form.setValue("price", data.product.price);
    }
  }, [form, data]);

  const loading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      const url=qs.stringifyUrl({
        url:`/api/product`,
        query:{
          productId:data?.product?.id
        }
      })
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
            Edit Product
          </DialogTitle>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <InputField
                placeholder="Product Name"
                form={form}
                name="productName"
              />
              <DropDownField
                items={countries}
                type1={true}
                form={form}
                name="country"
                disable={loading}
                placeholder="Select Country"
              />
              <DropDownField
                items={languages}
                type1={true}
                form={form}
                name="language"
                placeholder="Select Language"
                disable={loading}
              />
              <InputField
                type="number"
                disable={loading}
                placeholder="Price"
                form={form}
                name="price"
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

export default DemoModel;
