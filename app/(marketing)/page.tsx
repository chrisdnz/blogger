import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default () => (
  <>
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
          We're live
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Discover the Latest Stories
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Explore a world of captivating blog posts and stay informed on the
          topics that matter most to you.
        </p>
        <div className="space-x-4">
          <Link href="/blog" className={cn(buttonVariants({ size: "lg" }))}>
            View Blog Posts
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
    <section
      id="features"
      className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          This project is an experiment to see how a modern app, with features
          like auth, subscriptions, API routes, and static pages would work.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Icons.rocket className="h-12 w-12 fill-current" />
            <div className="space-y-2">
              <h3 className="font-bold">Blazing Fast</h3>
              <p className="text-sm text-muted-foreground">
                Our platform is optimized for lightning-fast performance,
                ensuring your content loads in the blink of an eye.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Icons.palette className="h-12 w-12 fill-current" />
            <div className="space-y-2">
              <h3 className="font-bold">Simple Design</h3>
              <p className="text-sm">
                Our design philosophy is centered around simplicity and
                elegance, ensuring a delightful user experience.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Icons.settings className="h-12 w-12 fill-current" />
            <div className="space-y-2">
              <h3 className="font-bold">Highly customizable</h3>
              <p className="text-sm text-muted-foreground">
                Customize your blog to match your brand with a variety of
                themes and settings.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Icons.shield className="h-12 w-12 fill-current" />
            <div className="space-y-2">
              <h3 className="font-bold">Secure and reliable</h3>
              <p className="text-sm text-muted-foreground">
                Rest easy knowing your blog is protected by industry-leading
                security measures and backed by a reliable infrastructure.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
              <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Subscriptions</h3>
              <p className="text-sm text-muted-foreground">
                Free and paid subscriptions using Stripe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)
