import { Layout } from "@/components/layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createBrowserHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const OurWorkPage = lazy(() => import("@/pages/OurWorkPage"));
const OldAgeHomePage = lazy(() => import("@/pages/OldAgeHomePage"));
const LeadershipPage = lazy(() => import("@/pages/LeadershipPage"));
const DonatePage = lazy(() => import("@/pages/DonatePage"));
const VolunteerPage = lazy(() => import("@/pages/VolunteerPage"));
const GalleryPage = lazy(() => import("@/pages/GalleryPage"));
const TestimonialsPage = lazy(() => import("@/pages/TestimonialsPage"));
const NewsPage = lazy(() => import("@/pages/NewsPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-10 w-10 border-4 border-primary border-t-transparent" />
  </div>
);

function RootComponent() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

const rootRoute = createRootRoute({ component: RootComponent });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <HomePage />
    </Suspense>
  ),
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <AboutPage />
    </Suspense>
  ),
});
const ourWorkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/our-work",
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <OurWorkPage />
    </Suspense>
  ),
});
const oldAgeHomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/old-age-home",
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <OldAgeHomePage />
    </Suspense>
  ),
});
const leadershipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/leadership",
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <LeadershipPage />
    </Suspense>
  ),
});
const donateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/donate",
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <DonatePage />
    </Suspense>
  ),
});
const volunteerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/volunteer",
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <VolunteerPage />
    </Suspense>
  ),
});
const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <GalleryPage />
    </Suspense>
  ),
});
const testimonialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/testimonials",
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <TestimonialsPage />
    </Suspense>
  ),
});
const newsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/news",
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <NewsPage />
    </Suspense>
  ),
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <ContactPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  ourWorkRoute,
  oldAgeHomeRoute,
  leadershipRoute,
  donateRoute,
  volunteerRoute,
  galleryRoute,
  testimonialsRoute,
  newsRoute,
  contactRoute,
]);

const history = createBrowserHistory();
const router = createRouter({ routeTree, history });

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
