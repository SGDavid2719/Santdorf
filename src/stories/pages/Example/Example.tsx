import '../../../styles/main.css';
import { Profile } from '../Profile/Profile';

export function Example() {
  return (
    <Profile
      src="https://via.placeholder.com/100"
      alt="Avatar Image"
      availabilityText="Available to work"
      greetingText={`Hi, I'm David Santomé`}
      shortDescription="+3 years of experience. Software engineer. Specialized in the development of web applications."
      tabs={[
        {
          title: 'React',
          id: 0,
          content:
            'React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc.',
        },
        {
          title: 'Storybook',
          id: 1,
          content:
            'Storybook is a frontend workshop for building UI components and pages in isolation.',
        },
      ]}
    />
  );
}
