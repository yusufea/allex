import { Skeleton } from "@/components/ui/skeleton"

export default function IronDeficiencyLoading() {
    return (
        <div className="w-full bg-white min-h-screen">

            {/* Banner */}
            <section className="w-full py-16 md:py-24">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="w-full lg:w-1/2 flex flex-col gap-4">
                            <Skeleton className="h-14 w-3/4" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-2/3" />
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <Skeleton className="w-full max-w-[480px] h-[340px] rounded-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Badges */}
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10 mb-12">
                <div className="flex flex-wrap gap-5">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 w-[100px]">
                            <Skeleton className="w-14 h-14 rounded-full" />
                            <Skeleton className="h-3 w-16" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Tabs bar */}
            <div className="w-full border-t border-b border-slate-200 py-4">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex gap-8">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className="h-5 w-24" />
                    ))}
                </div>
            </div>

            {/* Tab content */}
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        <Skeleton className="h-8 w-48" />
                        <Skeleton className="h-64 w-full rounded-xl" />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-3">
                        <Skeleton className="h-8 w-36" />
                        {Array.from({ length: 8 }).map((_, i) => (
                            <Skeleton key={i} className="h-5 w-full" />
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQs */}
            <div className="w-full bg-slate-50 border-t border-slate-200 py-12">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex flex-col gap-4">
                    <Skeleton className="h-10 w-64 mb-4" />
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton key={i} className="h-16 w-full rounded-xl" />
                    ))}
                </div>
            </div>

        </div>
    )
}
