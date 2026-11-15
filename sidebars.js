module.exports = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'User guide',
      items: [
        {type: 'doc', id: 'user-guide/overview', label: 'Overview'},
        'user-guide/manage-availability',
        'user-guide/handle-interaction',
      ],
    },
    {
      type: 'category',
      label: 'Administrator guide',
      items: [
        {type: 'doc', id: 'admin-guide/overview', label: 'Overview'},
        'admin-guide/create-user',
        'admin-guide/configure-routing',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        {type: 'doc', id: 'integrations/overview', label: 'Overview'},
        'integrations/crm-connection',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        {type: 'doc', id: 'operations/overview', label: 'Overview'},
        'operations/upgrade-workflow',
        'operations/troubleshooting',
      ],
    },
  ]
};
