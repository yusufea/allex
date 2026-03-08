import { Skeleton } from "@/components/ui/skeleton"

export default function OurStoryLoading() {
    return (
        <div className="w-full min-h-screen bg-white">

            {/* ── SECTION 1: Our Story ── */}
            <section className="w-full py-16 md:py-24">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-16">

                        {/* Text */}
                        <div className="w-full lg:w-2/3 flex flex-col gap-5">
                            <Skeleton className="h-14 w-48" />
                            <div className="flex flex-col gap-2">
                                <Skeleton className="h-5 w-full" />
                                <Skeleton className="h-5 w-full" />
                                <Skeleton className="h-5 w-5/6" />
                                <Skeleton className="h-5 w-full" />
                                <Skeleton className="h-5 w-4/5" />
                            </div>
                            <div className="flex flex-col gap-2 mt-2">
                                <Skeleton className="h-5 w-full" />
                                <Skeleton className="h-5 w-full" />
                                <Skeleton className="h-5 w-3/4" />
                            </div>
                            <div className="flex flex-col gap-2 mt-2">
                                <Skeleton className="h-5 w-full" />
                                <Skeleton className="h-5 w-full" />
                                <Skeleton className="h-5 w-4/5" />
                            </div>
                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4 mt-4">
                                <Skeleton className="h-10 w-32 rounded-full" />
                                <Skeleton className="h-10 w-36 rounded-full" />
                                <Skeleton className="h-10 w-36 rounded-full" />
                            </div>
                        </div>

                        {/* Image */}
                        <div className="w-full lg:w-1/3 flex justify-center">
                            <Skeleton className="w-full max-w-[480px] aspect-square rounded-xl" />
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SECTION 2: Our Mission ── */}
            <section className="w-full py-16 md:py-24 bg-slate-100">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
                        <Skeleton className="w-[180px] h-[180px] rounded-xl flex-shrink-0" />
                        <div className="flex flex-col gap-4 w-full">
                            <Skeleton className="h-10 w-44" />
                            <Skeleton className="h-6 w-3/4" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-4/5" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: Our Vision ── */}
            <section className="w-full py-16 md:py-24 bg-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
                        <Skeleton className="w-[180px] h-[180px] rounded-xl flex-shrink-0" />
                        <div className="flex flex-col gap-4 w-full">
                            <Skeleton className="h-10 w-40" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-4/5" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 4: Certifications ── */}
            <section className="w-full py-16 md:py-24 bg-slate-100">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col md:flex-row items-start gap-10 lg:gap-16">
                        <Skeleton className="w-[180px] h-[180px] rounded-xl flex-shrink-0" />
                        <div className="flex flex-col gap-4 w-full">
                            <Skeleton className="h-10 w-52" />
                            <Skeleton className="h-6 w-2/3" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-4/5" />
                            {/* Cert logos */}
                            <div className="flex gap-6 mt-2">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <Skeleton key={i} className="h-10 w-12 rounded" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
