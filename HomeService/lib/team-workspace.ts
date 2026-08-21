export type Presence = 'online' | 'away' | 'offline'
export type Channel = { id: string; name: string; description: string; unread: number; accent: string }
export type TeamMessage = { id: string; authorId: string; channelId?: string; conversationId?: string; body: string; createdAt: string; reactions: { emoji: string; count: number; reacted?: boolean }[] }
export type TeamActivity = { id: string; memberId: string; title: string; detail: string; time: string; tone: 'blue' | 'amber' | 'green' }

export const teamMembers = [
  { id: 'asif', name: 'Asif', role: 'Product & Backend', initials: 'AS', color: 'bg-sky-100 text-sky-700', presence: 'online' as Presence, lastSeen: 'Active now' },
  { id: 'meera', name: 'Meera', role: 'Frontend & UX', initials: 'ME', color: 'bg-emerald-100 text-emerald-700', presence: 'online' as Presence, lastSeen: 'Active now' },
  { id: 'candy', name: 'Candy', role: 'Data & Admin', initials: 'CA', color: 'bg-amber-100 text-amber-700', presence: 'away' as Presence, lastSeen: '12 min ago' },
  { id: 'meghana', name: 'Meghana', role: 'Design & QA', initials: 'MG', color: 'bg-violet-100 text-violet-700', presence: 'online' as Presence, lastSeen: 'Active now' },
]

export const channels: Channel[] = [
  { id: 'general', name: 'general', description: 'Team-wide announcements and daily pulse', unread: 0, accent: 'bg-primary' },
  { id: 'product', name: 'product-build', description: 'Product, UX, and feature decisions', unread: 0, accent: 'bg-emerald-500' },
  { id: 'backend', name: 'backend-api', description: 'Routes, data model, and integrations', unread: 0, accent: 'bg-amber-500' },
]

export const conversations = [
  { id: 'asif', memberId: 'asif' },
  { id: 'meera', memberId: 'meera' },
  { id: 'candy', memberId: 'candy' },
  { id: 'meghana', memberId: 'meghana' },
]

export function memberById(id: string) { return teamMembers.find((member) => member.id === id) ?? teamMembers[0] }
export function relativeTime(date: Date) { return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) }
const progressFor = (status: string) => status === 'Done' ? 100 : status === 'In progress' ? 50 : 0
export function roadmapSummary(phases: { tasks: { status: string }[] }[]) { const tasks = phases.flatMap((phase) => phase.tasks); const done = tasks.filter((task) => task.status === 'Done').length; const progress = Math.round(tasks.reduce((sum, task) => sum + progressFor(task.status), 0) / tasks.length); return { total: tasks.length, done, progress } }
export const priorityItems = [
  { label: 'Close shared project requirements', owner: 'Asif', due: 'Today', tone: 'urgent' },
  { label: 'Review booking flow screens', owner: 'Meera + Meghana', due: 'Tomorrow', tone: 'normal' },
  { label: 'Lock admin metrics definition', owner: 'Candy', due: 'Fri, Aug 23', tone: 'normal' },
]
export const upcoming = [
  { title: 'Planning sync', date: 'Today', time: '3:00 PM', kind: 'Team meeting' },
  { title: 'Booking flow review', date: 'Tomorrow', time: '11:00 AM', kind: 'Design review' },
  { title: 'Phase 1 handoff', date: 'Fri, Aug 23', time: '4:30 PM', kind: 'Milestone' },
]
