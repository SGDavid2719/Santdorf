import { InputType } from '../shared/types';

export function getPlaceholderIfRequired({
  type,
  placeholder,
}: {
  type: InputType;
  placeholder: string | undefined;
}) {
  const typesWithPlaceholder = [
    'email',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'url',
  ];

  return typesWithPlaceholder.includes(type) ? placeholder : undefined;
}
