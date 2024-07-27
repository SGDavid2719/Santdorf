import { Avatar } from '../../atoms/Avatar/Avatar';
import { SuccessBadge } from '../../atoms/Badge/Badge';
import './profile.css';
import '../../../styles/main.css';
import { Tabs } from '../../organisms/Tabs/Tabs';

interface Tab {
  title: string;
  id: number;
  content: string;
}

interface ProfileProps {
  src: string;
  alt: string;
  availabilityText: string;
  greetingText: string;
  shortDescription: string;
  tabs: Tab[];
}

export function Profile({
  src,
  alt,
  availabilityText,
  greetingText,
  shortDescription,
  tabs,
}: ProfileProps) {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="homepage-header-container">
          <Avatar src={src} alt={alt} size="large" />
          <SuccessBadge value={availabilityText} size="fit" />
        </div>
        <h1 className="homepage-header-greeting">{greetingText}</h1>
        <p className="homepage-header-shortDescription">{shortDescription}</p>
      </header>
      <section className="homepage-section">
        <h2>Technologies used</h2>
        <Tabs tabs={tabs}>
          {tabs.map((tab) => (
            <p key={tab.id}>{tab.content}</p>
          ))}
        </Tabs>
      </section>
    </div>
  );
}
