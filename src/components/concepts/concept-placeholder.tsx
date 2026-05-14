import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ConceptPlaceholderProps = {
  label: string;
};

export function ConceptPlaceholder({ label }: ConceptPlaceholderProps) {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-3xl items-center">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>{label}</CardTitle>
            <CardDescription>
              Reserved for the design sample you provide. No visual direction has been
              applied yet.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            <p>
              This route is intentionally neutral so the final layout, imagery, motion,
              and component composition can follow the reference sample directly.
            </p>
          </CardContent>
          <CardFooter>
            <Link className={cn(buttonVariants({ variant: "outline" }), "w-full")} href="/concepts">
              Back to concept chooser
            </Link>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}

