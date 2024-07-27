import React, { useEffect, useState } from 'react';
import './tabs.css';
import { Button } from '../../atoms/Button/Button';
import { joinClassNames } from '../../../utils/styles';

interface Tab {
  /**
   * Required property to indicate the tab title
   */
  title: string;
  /**
   * Required property to indicate the tab id
   */
  id: number;
}

interface TabsProps {
  /**
   * Required property to indicate the tabs
   */
  tabs: Tab[];
  /**
   * Required property to indicate the tab content
   */
  children: React.ReactNode;
  /**
   * Optional property to indicate the active tab
   */
  activeTabId?: number;
}

export function Tabs({
  tabs,
  children,
  activeTabId,
}: TabsProps): React.ReactNode {
  // States
  const [activeTab, setActiveTab] = useState(0);

  // UseEffects

  useEffect(() => {
    if (activeTabId != null) setActiveTab(activeTabId);
  }, [activeTabId]);

  // Variables
  let TabContent = <></>;
  React.Children.forEach(children, (element, elementIndex) => {
    if (!React.isValidElement(element)) return;
    if (elementIndex === activeTab) TabContent = element;
  });

  return (
    <div>
      <ul className="tabs-list">
        {tabs.map((tab, tabIndex) => {
          const { id, title } = tab;

          const activeTabClassName =
            activeTab === tabIndex ? 'active' : 'inactive';

          const handleActiveTab = () => setActiveTab(id);

          return (
            <li key={id} className="tabs-list-item">
              <Button
                onClick={handleActiveTab}
                btnType="default"
                extraClassName={joinClassNames({
                  classNames: ['tabs-list-item-button', activeTabClassName],
                })}
              >
                {title}
              </Button>
            </li>
          );
        })}
      </ul>
      <div className="tab-content">{TabContent}</div>
    </div>
  );
}
