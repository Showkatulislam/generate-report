import InputField from "@/components/Inputs/InputField";
import TextField from "@/components/Inputs/textField";
import { Title } from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { formToJSON } from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be need.",
  }),
  branch : z.string().min(2, {
    message: "Branch Name must be need.",
  }),
  comment: z.string()
});
interface ReportProps{
  reportId:string
}
export const BankInfo = ({reportId}:ReportProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name:"",
        branch:"",
        comment:"",
    },
  });
  const loading=form.formState.isSubmitting
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    await axios.post("/api/bank",{...values,reportId})
    form.reset()
  };
  return (
    <div className="border p-3">
      <Form {...form}>
        <Title title="Bank Information" />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid grid-cols-12 gap-x-3 items-center"
        >
          <div className="col-span-6">
            <InputField
              name="name"
              placeholder="Bank Name"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="branch"
              placeholder="Branch Name"
              form={form}
            />
          </div>
          <div className="col-span-12">
            <TextField
              name="comment"
              placeholder="Comment"
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
