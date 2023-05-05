export const Input = ({
  id,
  name,
  label,
  type,
  placeholder,
  ...props
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
}) => {
  return (
    <fieldset>
      <label
        className=" block mb-2 text-sm font-medium text-black-300 text-center"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className=" border text-sm rounded-lg block w-full p-2.5 bg-white/5 border-gray-600 placeholder-gray-400 text-white text-center"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        {...props}
      />
    </fieldset>
  );
};
