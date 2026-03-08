import { Skeleton } from "@/components/ui/skeleton"

export default function HealthHubLoading() {
    return (
        <div className="w-full min-h-screen bg-white">

            {/* Page Header */}
            <div className="w-full py-12 md:py-16 px-6 border-b border-slate-100">
                <div className="max-w-[1200px] mx-auto">
                    <Skeleton className="h-12 w-64" />
                </div>
            </div>

            {/* Info Cards Grid */}
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10 md:py-16">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-12">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div
                            key={i}
                            className="flex flex-col sm:flex-row gap-6 border border-slate-100 rounded-2xl overflow-hidden"
                        >
                            {/* Image Column */}
                            <Skeleton className="w-full sm:w-[220px] min-h-[200px] sm:min-h-0 flex-shrink-0 rounded-none" />

                            {/* Text Column */}
                            <div className="flex flex-col gap-4 p-5 sm:pl-0 sm:pr-5 sm:py-5 flex-1">
                                <div className="flex flex-col gap-1.5">
                                    <Skeleton className="h-5 w-full" />
                                    <Skeleton className="h-5 w-4/5" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-3/4" />
                                </div>
                                <div className="flex gap-3 mt-auto pt-2">
                                    <Skeleton className="h-8 w-24 rounded-full" />
                                    <Skeleton className="h-8 w-40 rounded-full" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
