export const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={tab.id === activeTabId ? 'is-active' : ''}
          data-cy="Tab"
          onClick={() => tab.id !== activeTabId && onTabSelected(tab.id)}
        >
          <a href={`#${tab.id}`} data-cy="TabLink">
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
    <div className="block" data-cy="TabContent">
      {tabs.find(tab => tab.id === activeTabId)?.content}
    </div>
  </div>
);
