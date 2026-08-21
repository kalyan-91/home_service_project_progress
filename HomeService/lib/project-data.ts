export type Status = 'Done' | 'In progress' | 'Planned'

export type Member = { id: string; name: string; initials: string; color: string }
export type Task = { id: string; title: string; ownerId: string; status: Status; tag: string; update: string }
export type Phase = { id: number; title: string; subtitle: string; ownerId: string; progress: number; tasks: Task[] }
export type ActivityItem = { id: string; memberId: string; text: string; time: string }

export const sharedCredentials = { username: 'team', password: 'homeservice' }

export const members: Member[] = [
  { id: 'asif', name: 'Asif', initials: 'AS', color: 'bg-sky-100 text-sky-700' },
  { id: 'meera', name: 'Meera', initials: 'ME', color: 'bg-emerald-100 text-emerald-700' },
  { id: 'candy', name: 'Candy', initials: 'CA', color: 'bg-orange-100 text-orange-700' },
  { id: 'meghana', name: 'Meghana', initials: 'MG', color: 'bg-violet-100 text-violet-700' },
]

const task = (id: string, title: string, ownerId: string, tag: string): Task => ({ id, title, ownerId, status: 'Planned', tag: ownerId === 'asif' || ownerId === 'candy' ? 'Backend & Database' : ownerId === 'meera' || ownerId === 'meghana' ? 'Frontend UI/UX' : tag, update: 'Not started.' })
const phase = (id: number, title: string, subtitle: string, ownerId: string, tasks: Task[]): Phase => ({ id, title, subtitle, ownerId, progress: 0, tasks })

export const initialPhases: Phase[] = [
  phase(1, 'Phase 1 — Planning', 'All four members finalize the product foundation together.', 'asif', [
    task('m1-1', 'Member 1 — Write requirements for Customer, Home, Appliance, Move Mode AND Services + Technicians', 'asif', 'Member 1'),
    task('m2-1', 'Member 2 — Contribute UI requirements/wireframes for Services, Technicians, Matching, Booking, Payments and Reviews screens', 'meera', 'Member 2'),
    task('m3-1', 'Member 3 — Write requirements for Admin, Statistics, Payments, Reviews, Notifications AND Booking + Nearby Matching', 'candy', 'Member 3'),
    task('m4-1', 'Member 4 — Contribute UI wireframes for Customer, Home, Appliance, Move Mode, Admin and Statistics screens', 'meghana', 'Member 4'),
    task('all-1', 'All 4 Together — Finalize objective, roles, ER diagram, database design and wireframes', 'asif', 'All 4 Together'),
  ]),
  phase(2, 'Phase 2 — UI Foundation', 'Shared design system and frontend foundations.', 'meghana', [
    task('m2-2', 'Member 2 — Follow the shared design system when building Services, Technicians, Matching, Booking, Payments and Reviews screens', 'meera', 'Member 2'),
    task('m4-2', 'Member 4 — Own the shared design system and build landing page, login/registration and dashboard layouts', 'meghana', 'Member 4'),
  ]),
  phase(3, 'Phase 3 — Backend Routes', 'Backend route ownership across customer, technician, admin, booking and matching.', 'asif', [
    task('m1-2', 'Member 1 — Build routes/auth.py, routes/customer.py, routes/technician.py, routes/services.py', 'asif', 'Member 1'),
    task('m3-2', 'Member 3 — Build routes/admin.py, services/statistics.py, routes/booking.py, routes/move.py and services/technician_matching.py', 'candy', 'Member 3'),
  ]),
  phase(4, 'Phase 4 — Core Product', 'Customer, technician, service, booking, admin, payment and frontend product work.', 'meghana', [
    task('m1-4', 'Member 1 — Implement home/appliance CRUD, multiple-home support, technician registration/profile and service catalog seeding', 'asif', 'Member 1'),
    task('m2-3', 'Member 2 — Build service catalog/browsing pages, service detail cards and technician profile/listing pages', 'meera', 'Member 2'),
    task('m2-4', 'Member 2 — Build booking request flow and status-tracker UI', 'meera', 'Member 2'),
    task('m2-7', 'Member 2 — Build payment summary UI and post-completion rating/review UI components', 'meera', 'Member 2'),
    task('m3-4', 'Member 3 — Build admin management, payment module and booking status flow', 'candy', 'Member 3'),
    task('m4-4', 'Member 4 — Build home list/detail UI, appliance cards and add/edit forms with warranty fields', 'meghana', 'Member 4'),
    task('m4-5', 'Member 4 — Build admin dashboard and statistics cards, charts, tables and filter UI', 'meghana', 'Member 4'),
  ]),
  phase(5, 'Phase 5 — Nearby Matching', 'Technician matching by location, skill, availability, rating and price.', 'candy', [
    task('m2-5', 'Member 2 — Build technician list/map view showing distance, skill match, rating and price clearly', 'meera', 'Member 2'),
    task('m3-5', 'Member 3 — Build city/pincode matching and lat/long distance calculation with skill, availability, rating and price', 'candy', 'Member 3'),
  ]),
  phase(6, 'Phase 6 — Move Mode', 'Appliance transfer, required services, new address and cost estimation.', 'asif', [
    task('m1-5', 'Member 1 — Build new-address and appliance-transfer logic for required-service matching', 'asif', 'Member 1'),
    task('m2-6', 'Member 2 — Build required-services and nearby-technician-search steps', 'meera', 'Member 2'),
    task('m3-6', 'Member 3 — Identify removal/installation services, find technicians and build cost-estimation logic', 'candy', 'Member 3'),
    task('m4-6', 'Member 4 — Build new-address entry, appliance-selection and cost-estimate/booking-confirmation steps', 'meghana', 'Member 4'),
  ]),
  phase(7, 'Phase 7 — Statistics', 'Customer, technician and admin analytics.', 'candy', [
    task('m3-7', 'Member 3 — Use Python/Pandas/NumPy/SciPy for mean, median, mode, variance, standard deviation, quartiles, correlation, regression and hypothesis tests', 'candy', 'Member 3'),
  ]),
  phase(8, 'Phase 8 — Testing', 'End-to-end, responsive, security and cross-browser quality checks.', 'candy', [
    task('m1-7', 'Member 1 — Test customer/home/appliance flows, technician registration and service catalog data', 'asif', 'Member 1'),
    task('m2-8', 'Member 2 — Test screens for responsiveness and correctness once backend data is wired', 'meera', 'Member 2'),
    task('m3-8', 'Member 3 — Test admin controls, payments, reviews, booking transitions, matching, statistics and security', 'candy', 'Member 3'),
    task('m4-8', 'Member 4 — Test responsiveness, cross-browser rendering and overall UI/UX consistency', 'meghana', 'Member 4'),
    task('all-8', 'All 4 Together — Full end-to-end workflow testing from login to booking, payment and Move Mode', 'asif', 'All 4 Together'),
  ]),
  phase(9, 'Phase 9 — Deployment', 'Production deployment, security checks and final integration.', 'meghana', [
    task('m1-8', 'Member 1 — Deploy customer, home, appliance, technician and service backend routes', 'asif', 'Member 1'),
    task('m2-9', 'Member 2 — Optimize and deploy static assets for Services, Technicians, Matching, Booking, Payments and Reviews', 'meera', 'Member 2'),
    task('m3-9', 'Member 3 — Deploy database, admin/analytics, booking and matching backend to production', 'candy', 'Member 3'),
    task('m4-9', 'Member 4 — Optimize and deploy static assets, verify production and lead final integration checks', 'meghana', 'Member 4'),
    task('all-9', 'All 4 Together — Final production launch, environment variables and security checks', 'asif', 'All 4 Together'),
  ]),
]

export const initialActivity: ActivityItem[] = []
export function memberById(id: string) { return members.find((member) => member.id === id) ?? members[0] }
export function cloneInitialPhases() { return structuredClone(initialPhases) }
export function resettableStorageKeys() { return ['homeservice-phases', 'homeservice-activity'] }
