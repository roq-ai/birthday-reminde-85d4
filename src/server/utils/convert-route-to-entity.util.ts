const mapping: Record<string, string> = {
  'family-members': 'family_member',
  friends: 'friend',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
