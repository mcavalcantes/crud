export function FormField({
  label,
  id,
  name,
  type,
  value,
  error,
  onChange,
}: {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <label htmlFor={id} className="font-semibold">
          {label}
        </label>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        className="rounded-lg border border-neutral-800 bg-neutral-900 p-2 transition outline-none hover:border-neutral-700 focus:border-neutral-600 focus:ring-2 focus:ring-red-600"
      />
    </div>
  );
}
