export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="submit"
      className="px-7 py-3 text-sm font-medium text-center text-black border border-black rounded-full"
    >
      {children}
    </button>
  );
};
