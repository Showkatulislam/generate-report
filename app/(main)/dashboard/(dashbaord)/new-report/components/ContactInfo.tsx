import InputField from "@/components/Inputs/InputField";
import { Title } from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  denomination: z.string().min(2, {
    message: "Denomination must be need.",
  }),
  address: z.string().min(2, {
    message: "Address ust be need.",
  }),
  such: z.string().min(2, {
    message: "Such must be need.",
  }),
  fax: z.string().min(2, {
    message: "Fax must be need.",
  }),
  cellPhone: z.string().min(2, {
    message: "Cell Phone must be need.",
  }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  website: z.string().min(2, {
    message: "Website must be need.",
  }),
});
interface ContactInfoProps{
  reportId:string
}
export const ContactInfo = ({reportId}:ContactInfoProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      denomination: "",
      address: "",
      such: "",
      fax: "",
      cellPhone: "",
      email: "",
      website: "",
    },
  });
  const loading=form.formState.isSubmitted
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await axios.post("/api/companyInfo",{...values,reportId})
  };
  return (
    <div className="border p-3">
      <Form {...form}>
        <Title title="Company Contact information" />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid grid-cols-12 gap-x-3 items-center"
        >
          <div className="col-span-6">
            <InputField name="denomination" placeholder="Denomination" form={form} />
          </div>
          <div className="col-span-6">
            <InputField name="address" placeholder="Address" form={form} />
          </div>
          <div className="col-span-6">
            <InputField name="such" placeholder="Such" form={form} />
          </div>
          <div className="col-span-6">
            <InputField name="fax" placeholder="Fax" form={form} />
          </div>
          <div className="col-span-6">
            <InputField name="cellPhone" placeholder="Cell Phone" form={form} />
          </div>
          <div className="col-span-6">
            <InputField
              name="email"
              placeholder="email"
              type="email"
              form={form}
            />
          </div>
          <div className="col-span-12">
            <InputField
              name="website"
              placeholder="website url"
              form={form}
            />
          </div>
          <div className="col-span-12">
            <Button disabled={loading} type="submit" variant="primary" size="lg">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
