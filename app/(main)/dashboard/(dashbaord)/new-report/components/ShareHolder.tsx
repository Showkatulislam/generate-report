import DropDownField from "@/components/Inputs/DropDownField";
import InputField from "@/components/Inputs/InputField";
import { Title } from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { currency } from "@/public/dropdownData";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be need.",
  }),
  share: z.coerce.number({
    required_error:"share will be Number",
    invalid_type_error:
    "share must contain only numbers and decimals.",
  }),
  nationatity: z.string().min(2, {
    message: "Nationality must be need.",
  })
});
interface ShareHolderProps{
  reportId:string
}
export const ShareHolder = ({reportId}:ShareHolderProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name:"",
        share:0,
        nationatity:""
    },
  });
  const loading=form.formState.isSubmitting
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    
    await axios.post("/api/shareholder",{...values,reportId})
  };
  return (
    <div className="border p-3">
      <Form {...form}>
        <Title title="ShareHolders" />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid grid-cols-12 gap-x-3 items-center"
        >
          <div className="col-span-4">
            <InputField
              name="name"
              placeholder="ShareHolder Name"
              form={form}
            />
          </div>
          <div className="col-span-4">
            <InputField
              name="share"
              placeholder="Share %"
              form={form}
            />
          </div>
          <div className="col-span-4">
            <InputField
              name="nationatity"
              placeholder="Nationality"
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
