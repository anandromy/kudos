interface FormFieldProps {
    htmlFor: string
    label: string
    type?: string
    value: any
    onChange?: (...args: any) => any
}

export const FormField = ({ htmlFor, label, type, value, onChange }: FormFieldProps) => {
    return(
        <>
        <label htmlFor={htmlFor} className="text-blue-600 font-semibold">
            {label}
        </label>
        <input type={type} value={value} onChange={onChange} id={htmlFor} className="w-full p-2 rounded-xl my-2" />
        </>
    )
}
  