import { FormField, FormItem,FormLabel,FormControl, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
interface InputFieldProps{
    form:any,
    name:string,
    placeholder:string,
    disable?:boolean,
    type?:string

}
const InputField = ({type,disable,form,name, placeholder}:InputFieldProps) => {
    return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{placeholder}</FormLabel>
              <FormControl>
                <Input  disabled={disable} type={type} placeholder={placeholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    );
};

export default InputField;