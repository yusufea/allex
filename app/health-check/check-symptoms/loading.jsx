import { Skeleton } from "@/components/ui/skeleton"

export default function CheckSymptomsLoading() {
    return (
        <div className="w-full bg-slate-50 min-h-screen py-12 px-4 flex flex-col items-center">

            {/* Title */}
            <div className="text-center mb-10 w-full max-w-2xl flex flex-col items-center gap-3">
                <Skeleton className="h-14 w-48" />
                <Skeleton className="h-5 w-36" />
            </div>

            {/* Question Card */}
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg border border-gray-100 p-4 md:p-10">

                {/* Step header */}
                <div className="text-center mb-8 flex flex-col items-center gap-2">
                    <Skeleton className="h-7 w-64" />
                    <Skeleton className="h-4 w-20" />
                </div>

                {/* Options */}
                <div className="flex flex-col gap-3">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className="h-14 w-full rounded-lg" />
                    ))}
                </div>

                {/* Nav buttons */}
                <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-100">
                    <Skeleton className="h-11 w-28 rounded-full" />
                    <Skeleton className="h-11 w-28 rounded-full" />
                </div>
            </div>

        </div>
    )
}
