import DatePicker from "@/components/Inputs/DatePicker";
import DropDownField from "@/components/Inputs/DropDownField";
import InputField from "@/components/Inputs/InputField";
import { Title } from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { legalStateMenu } from "@/public/dropdownData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import axios from "axios";
const formSchema = z.object({
  legalStatus: z.string().min(2, {
    message: "Legal Status must be need.",
  }),
  uniqueIdentifier: z.string().min(2, {
    message: "Unique Identifier must be need.",
  }),
  creationDate: z.date(
  ),
  startActivity: z.string().min(2, {
    message: "Start Activity must be need.",
  }),
  activityStatus: z.string().min(2, {
    message: "Activity Status  Phone must be need.",
  }),
  shareCapital: z.coerce.number({
    required_error: "Please enter a share Capital.",
    invalid_type_error: "share Capital must contain only numbers and decimals.",
  }),
  preShareCapital: z.coerce.number({
    required_error: "Please enter a preShare Capital.",
    invalid_type_error:
      "preShare Capital must contain only numbers and decimals.",
  }),
});
interface OfficialInfoProps{
  reportId:string
}
export const OfficialInfo = ({reportId}:OfficialInfoProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      legalStatus: "",
      uniqueIdentifier: "",
      creationDate:new Date(Date.now()),
      startActivity: "",
      activityStatus: "",
      shareCapital: 0,
      preShareCapital: 0,
    },
  });
  const loading=form.formState.isSubmitted
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    
    await axios.post("/api/officialInfo",{...values,reportId});
  };
  return (
    <div className="border p-3">
      <Form {...form}>
        <Title title="Official Information" />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid grid-cols-12 gap-x-3 items-center"
        >
          <div className="col-span-6">
            <DropDownField
              name="legalStatus"
              placeholder="Legal Status"
              type1={true}
              items={legalStateMenu}
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="uniqueIdentifier"
              placeholder="Unique Identifier"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <DatePicker
              name="creationDate"
              placeholder="Creation Date"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="startActivity"
              placeholder="Start Activity "
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="activityStatus"
              placeholder="Activity Status"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="shareCapital"
              placeholder="Share Capital"
              type="number"
              form={form}
            />
          </div>
          <div className="col-span-12">
            <InputField
              name="preShareCapital"
              placeholder="Previous Share Capital"
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
