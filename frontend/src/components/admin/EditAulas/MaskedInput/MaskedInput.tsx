import { ChangeEvent, useState } from 'react';

interface MaskedInputProps {
  value: string,
  index: number,
  onChange: (value: string, index: number) => void
}

const MaskedInput: React.FC<MaskedInputProps> = ({value, index, onChange}) => {
  const [valueI, setValueI] = useState<string>(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/[^\d.]/g, '');

    const parts = inputValue.split('.');

    if (parts[0].length > 3) {
      parts[0] = parts[0].slice(0, 3);
    }

    if (parts[1]) {
      parts[1] = parts[1].slice(0, 2);
    }

    setValueI(parts.join('.'));
    onChange(parts.join('.'), index);
  };

  return (
    <input
      type="text"
      value={valueI}
      onChange={handleChange}
    />
  );
}

export default MaskedInput;