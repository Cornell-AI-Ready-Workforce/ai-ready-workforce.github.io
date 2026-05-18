import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { conceptVariants, sharedMessaging } from "@/content/site";
import { cn } from "@/lib/utils";

export default function ConceptsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-8 text-foreground sm:px-10 lg:px-14">
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="flex flex-col gap-5 border-b pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Badge variant="secondary">Internal concept review</Badge>
            <h1 className="mt-5 text-4xl font-medium tracking-tight text-balance sm:text-6xl">
              Two separate website concepts for {sharedMessaging.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Same project and core claims. The public root now opens the focused light narrative;
              this page keeps both concepts available for review.
            </p>
          </div>
          <Link className={cn(buttonVariants({ variant: "outline" }), "w-fit")} href="/">
            Open public route
          </Link>
        </header>

        <div className="grid gap-5 lg:grid-cols-2">
          {conceptVariants.map((concept) => (
            <Card key={concept.slug} className="min-h-[360px]">
              <CardHeader>
                <Badge className="w-fit" variant="outline">
                  {concept.label}
                </Badge>
                <CardTitle className="text-3xl">{concept.name}</CardTitle>
                <CardDescription className="text-base leading-7">{concept.tone}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                <p>{concept.bestFor}</p>
              </CardContent>
              <CardFooter>
                <Link className={cn(buttonVariants(), "w-full")} href={concept.href}>
                  View full concept
                  <ArrowUpRightIcon data-icon="inline-end" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
