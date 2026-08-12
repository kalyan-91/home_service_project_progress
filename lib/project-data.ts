export type Status = 'Done' | 'In progress' | 'Planned'

export type Member = {
  id: string
  name: string
  initials: string
  color: string
}

export type Task = {
  id: string
  title: string
  ownerId: string
  status: Status
  tag: string
  update: string
}

export type Phase = {
  id: number
  title: string
  subtitle: string
  ownerId: string
  progress: number
  tasks: Task[]
}

export type ActivityItem = {
  id: string
  memberId: string
  text: string
  time: string
}

export const sharedCredentials = {
  username: 'team',
  password: 'homeservice',
}

export const members: Member[] = [
  { id: 'asif', name: 'Asif', initials: 'AS', color: 'bg-sky-100 text-sky-700' },
  { id: 'candy', name: 'Candy', initials: 'CA', color: 'bg-orange-100 text-orange-700' },
  { id: 'meera', name: 'Meera', initials: 'ME', color: 'bg-emerald-100 text-emerald-700' },
]

export const initialPhases: Phase[] = [
  { id: 1, title: 'Foundation & Architecture', subtitle: 'Product direction, roles, and technical blueprint', ownerId: 'asif', progress: 0, tasks: [
    { id: 'vision', title: 'Finalize product vision', ownerId: 'asif', status: 'Planned', tag: 'Strategy', update: 'Product direction is aligned.' },
    { id: 'architecture', title: 'Define system architecture', ownerId: 'asif', status: 'Planned', tag: 'Engineering', update: 'Core modules are mapped.' },
    { id: 'workflow', title: 'Create team workflow', ownerId: 'candy', status: 'Planned', tag: 'Operations', update: 'Team cadence is documented.' },
  ] },
  { id: 2, title: 'Database & Authentication', subtitle: 'Secure data model, sessions, and access control', ownerId: 'asif', progress: 0, tasks: [
    { id: 'schema', title: 'Design database schema', ownerId: 'asif', status: 'Planned', tag: 'Backend', update: 'Tables and relationships are ready.' },
    { id: 'auth', title: 'Set up authentication flow', ownerId: 'asif', status: 'Planned', tag: 'Backend', update: 'Login flow is being wired.' },
    { id: 'roles', title: 'Implement role-based access', ownerId: 'meera', status: 'Planned', tag: 'Security', update: 'Permission rules are next.' },
  ] },
  { id: 3, title: 'Service Provider Module', subtitle: 'Onboarding, profiles, availability, and verification', ownerId: 'candy', progress: 0, tasks: [
    { id: 'onboarding', title: 'Provider onboarding screens', ownerId: 'candy', status: 'Planned', tag: 'Frontend', update: 'Onboarding screens are complete.' },
    { id: 'availability', title: 'Availability calendar', ownerId: 'candy', status: 'Planned', tag: 'Frontend', update: 'Calendar states are in progress.' },
    { id: 'verification', title: 'Provider verification rules', ownerId: 'asif', status: 'Planned', tag: 'Backend', update: 'Rules await implementation.' },
  ] },
  { id: 4, title: 'Customer Booking Experience', subtitle: 'Search, service discovery, and booking flow', ownerId: 'candy', progress: 35, tasks: [
    { id: 'browse', title: 'Service category browse', ownerId: 'candy', status: 'Planned', tag: 'Frontend', update: 'Browse experience is being refined.' },
    { id: 'booking-api', title: 'Booking request API', ownerId: 'asif', status: 'Planned', tag: 'Backend', update: 'API work is queued.' },
    { id: 'confirmation', title: 'Booking confirmation states', ownerId: 'meera', status: 'Planned', tag: 'QA', update: 'Test cases will follow the flow.' },
  ] },
  { id: 5, title: 'Payments & Notifications', subtitle: 'Transactions, reminders, and service updates', ownerId: 'asif', progress: 0, tasks: [
    { id: 'payments', title: 'Payment provider integration', ownerId: 'asif', status: 'Planned', tag: 'Backend', update: 'Not started.' },
    { id: 'emails', title: 'Email notification templates', ownerId: 'meera', status: 'Planned', tag: 'Operations', update: 'Not started.' },
  ] },
  { id: 6, title: 'Admin Dashboard', subtitle: 'Controls, moderation, analytics, and reporting', ownerId: 'meera', progress: 0, tasks: [
    { id: 'metrics', title: 'Admin overview metrics', ownerId: 'meera', status: 'Planned', tag: 'Analytics', update: 'Not started.' },
    { id: 'users', title: 'User management controls', ownerId: 'meera', status: 'Planned', tag: 'Admin', update: 'Not started.' },
  ] },
  { id: 7, title: 'Testing & Launch', subtitle: 'Quality gate, deployment, and post-launch checks', ownerId: 'meera', progress: 0, tasks: [
    { id: 'e2e', title: 'End-to-end test suite', ownerId: 'meera', status: 'Planned', tag: 'QA', update: 'Not started.' },
    { id: 'launch', title: 'Production launch checklist', ownerId: 'asif', status: 'Planned', tag: 'Launch', update: 'Not started.' },
  ] },
]

export const initialActivity: ActivityItem[] = [
  { id: 'a1', memberId: 'asif', text: 'completed Design database schema', time: '24 minutes ago' },
  { id: 'a2', memberId: 'candy', text: 'moved Availability calendar to in progress', time: '2 hours ago' },
  { id: 'a3', memberId: 'meera', text: 'commented on Booking confirmation states', time: 'Yesterday' },
]

export function memberById(id: string) {
  return members.find((member) => member.id === id) ?? members[0]
}

export function cloneInitialPhases() {
  return structuredClone(initialPhases)
}
