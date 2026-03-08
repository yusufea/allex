import { Skeleton } from "@/components/ui/skeleton"

export default function QuizLoading() {
    return (
        <div className="w-full min-h-screen bg-white py-12">
            <div className="container max-w-[1200px] mx-auto px-4 md:px-8">

                {/* Quiz title + progress */}
                <div className="flex flex-col gap-4 mb-10">
                    <Skeleton className="h-10 w-72" />
                    <Skeleton className="h-3 w-full rounded-full" />
                    <Skeleton className="h-4 w-24" />
                </div>

                {/* Question card */}
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 md:p-10">
                    <Skeleton className="h-8 w-3/4 mb-8" />

                    {/* Options */}
                    <div className="flex flex-col gap-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Skeleton key={i} className="h-14 w-full rounded-lg" />
                        ))}
                    </div>

                    {/* Nav */}
                    <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
                        <Skeleton className="h-11 w-28 rounded-full" />
                        <Skeleton className="h-11 w-28 rounded-full" />
                    </div>
                </div>

            </div>
        </div>
    )
}
