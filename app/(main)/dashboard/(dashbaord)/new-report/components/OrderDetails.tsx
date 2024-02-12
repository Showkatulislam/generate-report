import DropDownField from "@/components/Inputs/DropDownField";
import InputField from "@/components/Inputs/InputField";
import { Title } from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { priority } from "@/public/dropdownData";
import { zodResolver } from "@hookform/resolvers/zod";
import { Client } from "@prisma/client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  customer: z.string().min(2, {
    message: "Customer must be need.",
  }),
  object: z.string().min(2, {
    message: "Object ust be need.",
  }),
  reference: z.string().min(2, {
    message: "Reference must be need.",
  }),
  priority: z.string().min(2, {
    message: "Priority must be need.",
  }),
  tongue: z.string().min(2, {
    message: "Tongue must be need.",
  }),
  creditRequested: z.string().min(2, {
    message: "Tongue must be need.",
  }),
});
interface OrderDetails {
  clients: Client[] | null;
  reportId:string
}
const OrderDetails = ({ clients,reportId }: OrderDetails) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customer: "",
      object: "",
      reference: "",
      priority: "",
      tongue: "",
      creditRequested: "",
    },
  });
  const loading=form.formState.isSubmitted
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await axios.post("/api/orderDetail",{...values,reportId});
  };
  return (
    <div className="border p-3">
      <Form {...form}>
        <Title title="Order Details" />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid grid-cols-12 gap-x-3 items-center"
        >
          <div className="col-span-6">
            <DropDownField
              name="customer"
              form={form}
              placeholder="Custormer"
              type3={true}
              type3Items={clients}
            />
          </div>
          <div className="col-span-6">
            <InputField name="object" placeholder="Object" form={form} />
          </div>
          <div className="col-span-6">
            <InputField name="reference" placeholder="Reference" form={form} />
          </div>
          <div className="col-span-6">
            <DropDownField
              name="priority"
              form={form}
              placeholder="Priority"
              type1={true}
              items={priority}
            />
          </div>
          <div className="col-span-6">
            <InputField name="tongue" placeholder="tongue" form={form} />
          </div>
          <div className="col-span-6">
            <InputField
              name="creditRequested"
              placeholder="Credit Requested"
              form={form}
            />
          </div>
          <div className="col-span-12">
            <Button type="submit" disabled={loading} variant="primary" size="lg">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default OrderDetails;
