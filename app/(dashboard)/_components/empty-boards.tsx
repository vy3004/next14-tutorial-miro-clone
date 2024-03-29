"use client";

import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { useOrganization } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

import { api } from "@/convex/_generated/api";

export const EmptyBoards = () => {
  const route = useRouter();
  const create = useMutation(api.board.create);
  const { organization } = useOrganization();

  const onClick = () => {
    if (!organization) return;

    create({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created");
        route.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="EmptyBoards" width={110} height={110} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button onClick={onClick} size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};
