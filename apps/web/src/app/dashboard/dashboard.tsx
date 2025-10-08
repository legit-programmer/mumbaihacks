"use client";
import { useQuery } from "@tanstack/react-query";
import type { authClient } from "@/lib/auth-client";
import { trpc } from "@/utils/trpc";

// biome-ignore lint/correctness/noUnusedFunctionParameters: This is a default file.
export default function Dashboard({ session }: { session: typeof authClient.$Infer.Session }) {
	const privateData = useQuery(trpc.privateData.queryOptions());

	return <p>API: {privateData.data?.message}</p>;
}
