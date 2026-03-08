import { Skeleton } from "@/components/ui/skeleton"

export default function HomeLoading() {
    return (
        <div className="w-full bg-white">

            {/* ── HERO ── */}
            <section className="w-full min-h-[80vh] flex items-center bg-slate-100 py-16">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full">
                    <div className="flex flex-col gap-6 max-w-2xl">
                        <Skeleton className="h-16 w-3/4" />
                        <Skeleton className="h-16 w-2/3" />
                        <Skeleton className="h-6 w-1/2" />
                        <div className="flex flex-wrap gap-3 mt-4">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <Skeleton key={i} className="h-10 w-36 rounded-full" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FEATURES ── */}
            <section className="w-full py-12 bg-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                <Skeleton className="w-16 h-16 rounded-full" />
                                <Skeleton className="h-4 w-20" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── QUOTE ── */}
            <section className="w-full py-14 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <Skeleton className="w-[160px] h-[50px] flex-shrink-0" />
                        <div className="flex flex-col gap-3 w-full">
                            <Skeleton className="h-6 w-full" />
                            <Skeleton className="h-6 w-full" />
                            <Skeleton className="h-6 w-4/5" />
                            <Skeleton className="h-5 w-40 mt-4 self-end" />
                            <Skeleton className="h-4 w-32 self-end" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PARTNERS ── */}
            <section className="w-full py-10 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <Skeleton className="h-8 w-48 mb-10" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <Skeleton key={i} className="h-16 w-full rounded-lg" />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROCESS ── */}
            <section className="w-full py-14 bg-slate-50">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <Skeleton className="h-10 w-56 mx-auto mb-12" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="flex flex-col gap-4">
                                <Skeleton className="w-full aspect-square rounded-xl max-w-[200px] mx-auto" />
                                <Skeleton className="h-7 w-40" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TESTS ── */}
            <section className="w-full py-14 bg-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <Skeleton className="h-10 w-40 mb-8" />
                    <div className="flex gap-3 mb-8">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <Skeleton key={i} className="h-10 w-32 rounded-full" />
                        ))}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <Skeleton key={i} className="h-28 rounded-xl" />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MISSION ── */}
            <section className="w-full py-20 bg-slate-900">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2 flex flex-col gap-5">
                            <Skeleton className="h-14 w-2/3 bg-slate-700" />
                            <Skeleton className="h-8 w-4/5 bg-slate-700" />
                            <Skeleton className="h-5 w-full bg-slate-700" />
                            <Skeleton className="h-5 w-full bg-slate-700" />
                            <Skeleton className="h-5 w-3/4 bg-slate-700" />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <Skeleton className="w-full aspect-video rounded-xl bg-slate-700" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
