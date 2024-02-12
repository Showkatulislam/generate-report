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
  sharecapital: z.string().min(2, {
    message: "Share Capital must be need.",
  }),
  sharecapitaltext: z.string().min(2, {
    message: "Share Capital ust be need.",
  }),
  socialcapital: z.string().min(2, {
    message: "Social Capital must be need.",
  }),
  socialcapitaltext: z.string().min(2, {
    message: "Social Capital Text must be need.",
  }),
});
interface CapitalInfoProps {
  reportId: string;
}
export const CapitalInfo = ({ reportId }: CapitalInfoProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sharecapital: "",
      sharecapitaltext: "",
      socialcapital: "",
      socialcapitaltext: "",
    },
  });
  const loading = form.formState.isSubmitted;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await axios.post("/api/capitalInfo", { ...values, reportId });
  };
  return (
    <div className="border p-3">
      <Form {...form}>
        <Title title="Capital" />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid grid-cols-12 gap-x-3 items-center"
        >
          <div className="col-span-1">
            <DropDownField
              name="sharecapital"
              placeholder="."
              type1={true}
              items={currency}
              form={form}
            />
          </div>
          <div className="col-span-5">
            <InputField
              name="sharecapitaltext"
              placeholder="Share Capital"
              form={form}
            />
          </div>
          <div className="col-span-1">
            <DropDownField
              name="socialcapital"
              placeholder=" ."
              type1={true}
              items={currency}
              form={form}
            />
          </div>
          <div className="col-span-5">
            <InputField
              name="socialcapitaltext"
              placeholder="Social Capital text"
              form={form}
            />
          </div>
          <div className="col-span-12">
            <Button
              disabled={loading}
              type="submit"
              variant="primary"
              size="lg"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
