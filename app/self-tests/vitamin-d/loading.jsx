import { Skeleton } from "@/components/ui/skeleton"

export default function VitaminDLoading() {
    return (
        <div className="w-full bg-white min-h-screen">

            {/* ── BANNER ── */}
            <section className="w-full py-16 md:py-24 bg-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                        {/* Text column */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <Skeleton className="h-14 w-3/4" />
                            <div className="flex flex-col gap-2">
                                <Skeleton className="h-5 w-full" />
                                <Skeleton className="h-5 w-full" />
                                <Skeleton className="h-5 w-4/5" />
                            </div>
                        </div>

                        {/* Image column */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <Skeleton className="w-full max-w-[480px] aspect-[4/3] rounded-xl" />
                        </div>

                    </div>
                </div>
            </section>

            {/* Banner badges */}
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

            {/* ── TABS ── */}
            <div className="w-full border-t border-b border-slate-200 bg-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex gap-0">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <Skeleton key={i} className="h-[52px] w-32 mx-1 my-0 rounded-none rounded-t-md" />
                        ))}
                    </div>
                </div>
            </div>

            {/* ── TAB CONTENT (Overview placeholder) ── */}
            <section className="w-full py-12 md:py-16 bg-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Video placeholder */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-4">
                            <Skeleton className="h-8 w-44" />
                            <Skeleton className="w-full aspect-video rounded-xl" />
                        </div>

                        {/* Symptoms placeholder */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-4">
                            <Skeleton className="h-8 w-36" />
                            <div className="flex flex-col gap-3">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <Skeleton className="w-2 h-2 rounded-full flex-shrink-0" />
                                        <Skeleton className={`h-5 ${i % 2 === 0 ? "w-3/4" : "w-full"}`} />
                                    </div>
                                ))}
                            </div>
                            <Skeleton className="h-4 w-2/3 mt-2" />
                        </div>

                    </div>
                </div>
            </section>

            {/* ── FAQs ── */}
            <section className="w-full py-12 md:py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <Skeleton className="h-10 w-24 mb-10" />
                    <div className="flex flex-col gap-3">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-xl px-6 py-5">
                                <Skeleton className={`h-5 ${i % 3 === 0 ? "w-3/4" : i % 3 === 1 ? "w-2/3" : "w-4/5"}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}
