import FeatureProducts from '@/components/landing-page/feature-products';
import HeroSection from '@/components/landing-page/hero-section';
import RecentlyLaunchedProducts from '@/components/landing-page/recently-launched-products';
import ProductSkeleton from '@/components/products/product-skelton';
import { Suspense } from 'react';

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
      <HeroSection />

      <FeatureProducts />

      <Suspense fallback={<ProductSkeleton />}>
        <RecentlyLaunchedProducts />
      </Suspense>
    </section>
  );
}
