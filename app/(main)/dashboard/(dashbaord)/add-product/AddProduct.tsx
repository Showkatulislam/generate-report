"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputField from "@/components/Inputs/InputField";
import DropDownField from "@/components/Inputs/DropDownField";
import { countries, languages } from "@/public/dropdownData";
import toast from "react-hot-toast";
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

const AddProduct = () => {
  const router=useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      country: "",
      language: "",
      price: "",
    },
  });
  const loading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/product", values);
      toast.success("Product add Successfully");
      form.reset();
      router.refresh()
    } catch (error) {
      toast.error("Product Not Added");
      console.log(error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <InputField placeholder="Product Name" form={form} name="productName" />
        <DropDownField
         type1={true}
          items={countries}
          form={form}
          name="country"
          disable={loading}
          placeholder="Select Country"
        />
        <DropDownField
          type1={true}
          items={languages}
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
        <Button disabled={loading} type="submit" size="lg">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AddProduct;
